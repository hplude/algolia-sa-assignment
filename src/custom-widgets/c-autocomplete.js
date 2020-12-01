import instantsearch from 'instantsearch.js';
import { connectAutocomplete, connectRefinementList } from 'instantsearch.js/es/connectors';
import ACsuggestionTemplate from '../templates/ac-suggestion-hit'
import ACproductTemplate from '../templates/ac-product-hit'

// this widget doesn't actually get rendered
const virtualRefinementList = connectRefinementList(
  () => null
);

// custom autocomplete that renders both product hits and query suggestion hits in 
// the autocomplete dropdown
const autoComplete = connectAutocomplete(
  ({ indices, refine, widgetParams }, isFirstRendering) => {
    const { initialIndices, container, onSelectChange } = widgetParams;

    // set up initial render configurations
    if (isFirstRendering) {

    	// for some reason indices is undefined on firstRender so I'm spooding the indices manually
			const optgroups = initialIndices.map((index, idx) => ({
        $order: idx,
        id: index.indexName,
        name: index.indexName,
        hitType: getHitType(index)
      }));

      container.html('<select id="ais-autocomplete"></select>');

      container.find('select').selectize({
        options: [],
        placeholder: 'Search for products, categories, or brands...',
        valueField: 'optionLabel' ,
        labelField: 'optionLabel',
        optgroups,
        optgroupField: 'hitType',
        optgroupLabelField: 'hitType',
        optgroupValueField: 'indexName',
        highlight: true,
        onType(value) {
          refine(value);
          onSelectChange({
            category: this.getOption(value).data('category'),
            query: value
          })
        },
        onBlur() {
          refine(this.getValue());
        },
        onChange(value) {
          refine(value);
          onSelectChange({
            category: this.getOption(value).data('category'),
            query: value,
          });
        },
        score() {
          return function() {
            return 1;
          };
        },
        render: {
          option(hit) {
            if (hit.query) {
	            return ACsuggestionTemplate(hit);
            }
            return ACproductTemplate(hit);
          },
        },
      });

      return;
    }

    const [select] = container.find('select');

    // add the correct properties to the results hits so different 'types' of 
    // results can be shown in one dropdown without autocomplete.js
    select.selectize.clearOptions();
    indices.forEach(index => {
    	if (index.results) {
    		index.hitType = getHitType(index); 
    		select.selectize.addOptionGroup(index.hitType, index);
        index.results.hits.forEach(hit => 
          select.selectize.addOption(
            Object.assign({}, hit, {
              hitType: index.hitType,
              optionLabel: hit.query || hit.name,
              optionValue: hit.query || hit.name
            })
          )
        );
    	}
    });

    select.selectize.refreshOptions(select.selectize.isOpen);
  }
);

const getHitType = (index) => {
	if (index.indexName === "instant_search") {
		return "Products";
	}
	return "Suggestions";
}

export default { autoComplete, virtualRefinementList };