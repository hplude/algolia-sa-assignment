// run from terminal with `node -r dotenv/config helpers/import-products.js`

const algoliasearch = require('algoliasearch')
const client = algoliasearch('K21NPA2TCC', process.env.ADMIN_API_KEY)

const productsJSON = require('../data/products.json')
const index = client.initIndex('products');

index.saveObjects(productsJSON, {
	autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
	console.log(objectIDs);
});

