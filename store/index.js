export const actions = {
  nuxtServerInit: async ({ commit }, { app, error }) => {
    try {
      const vacations = await app.$vacanciesApi.getVacancies()

      commit('vacations/SET_VACATIONS', vacations)
    } catch (err) {
      error(err)
    }
  },
}
