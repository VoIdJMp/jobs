export const state = () => ({
  vacations: [],
  fullTimeCount: 0,
  partTimeCount: 0,
})

export const mutations = {
  SET_VACATIONS: (state, vacations) => {
    state.vacations = vacations
    state.vacations = state.vacations.map((item, index) => {
      if (index <= state.vacations.length / 3) item.type = 'Part Time'
      return item
    })
    state.fullTimeCount = vacations.filter((item) => item.type === 'Full Time')
    state.partTimeCount = vacations.filter((item) => item.type === 'Part Time')
  },
}

export const getters = {
  getVacations(state) {
    return state.vacations
  },

  getRateCount(state) {
    return [state.fullTimeCount.length, state.partTimeCount.length]
  },
}
