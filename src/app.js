import UnifiedSearch from './components/unified-search';

// if (process.env.NODE_ENV !== 'production') {
//   console.log('Using dotenv to set environment variables.')
//   require('dotenv').config()
// }

class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
  }

  _initSearch() {
    this.unifiedSearch = new UnifiedSearch();
  }
}

const app = new SpencerAndWilliamsSearch();
