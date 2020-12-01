const autocompleteSuggestionHit = (hit) => {
	const [category] = hit.instant_search.facets.exact_matches.categories;

	return `
	  <div class="option suggestion-hit" data-category="${category.value}">
	    ${hit.query} in <i>${category.value}</i>
	  </div>
  `;
}

export default autocompleteSuggestionHit;
