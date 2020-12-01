const autocompleteProductHit = (hit) => {
	return `
    	<div class="option product-hit">
    		${hit.name}
  		</div>
	`;
}

export default autocompleteProductHit;
