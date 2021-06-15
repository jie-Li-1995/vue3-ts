import { Commit } from 'vuex'

const count = {
  state: {
    count: 0
  },
  mutations: {
    increaseCount (state: { count: number }): void {
      state.count += 1
    }
  },
  actions: {
    asyncIncreaseCount ({ commit }: { commit: Commit }): void {
      setTimeout(() => {
        commit('increaseCount')
      }, 5000)
    }
  }
}

export default count
