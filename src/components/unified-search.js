import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';

// Instant Search Widgets
import { 
  hits, 
  searchBox, 
  configure, 
  index, 
  refinementList, 
  clearRefinements,
  pagination,
  numericMenu,
  ratingMenu } from 'instantsearch.js/es/widgets';

// Custom Widgets
import customACWidgets from '../custom-widgets/c-autocomplete';

// Result Template
import resultHit from '../templates/result-hit';

/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Unifiedsearch {

/**
 * @constructor
 */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }


  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this.searchClient = algoliasearch(
      'K21NPA2TCC',
      process.env.SEARCH_API_KEY
    );

    this.suggestionSearch = instantsearch({
      indexName: 'instant_search_query_suggestions',
      searchClient: this.searchClient,
    });

    this.mainSearch = instantsearch({
      indexName: 'instant_search',
      searchClient: this.searchClient,
    });
  }


  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() { 
    this.suggestionSearch.addWidgets([
      index({ 
        indexName: 'instant_search',
      }),
      configure({
        hitsPerPage: 3,
      }),
      customACWidgets.autoComplete({
        container: $('#autocomplete'),
        onSelectChange: ({ query, category }) => {
          // eslint-disable-next-line
          this.mainSearch.helper
            .setQuery(query)
            .removeDisjunctiveFacetRefinement('categories');

          if (category) {
            // eslint-disable-next-line
            this.mainSearch.helper.addDisjunctiveFacetRefinement('categories', category);
          }

          // eslint-disable-next-line
          this.mainSearch.helper.search();
        },
        initialIndices: [{
          indexName: 'instant_search_query_suggestions',
        }, {
          indexName: 'instant_search',
        }]
      }),
    ]);
  
    this.mainSearch.addWidgets([
      customACWidgets.virtualRefinementList({
        attribute: 'categories',
      }),
      configure({
        hitsPerPage: 12,
      }),
      hits({
        container: '#product-hits',
        templates: {
          item: resultHit
        },
      }),
      clearRefinements({
        container: '#clear-refinements'
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
      pagination({
        container: '#pagination',
      }),
      numericMenu({
        container: '#numeric-menu',
        attribute: 'price',
        items: [
          { label: 'All' },
          { label: 'Less than $500', end: 500 },
          { label: 'Between $500 - $1000', start: 500, end: 1000 },
          { label: 'More than $1000', start: 1000 },
        ],
      }),
      ratingMenu({
        container: '#rating-menu',
        attribute: 'rating',
      })
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this.suggestionSearch.start();
    this.mainSearch.start();
  }
}

export default Unifiedsearch;