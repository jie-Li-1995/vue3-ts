import { createStore } from 'vuex'

import count from './modules/count'

export default createStore({
  modules: {
    count
  }
})
