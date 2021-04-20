import { Vacancies } from '~/api/Vacancies'

export default ({ $axios }, inject) => {
  const vacancies = $axios.create({
    baseURL: 'https://jobs.github.com',
  })

  inject('vacanciesApi', Vacancies(vacancies))
}
