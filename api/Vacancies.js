export const Vacancies = ($axios) => ({
  /**
   * @returns {Promise<any>}
   */
  getVacancies() {
    return $axios.$get('/positions.json?description=api')
  },
})
