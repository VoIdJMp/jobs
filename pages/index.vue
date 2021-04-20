<template>
  <main class="flex-1 relative overflow-y-auto focus:outline-none mb-4">
    <div class="my-6">
      <div class="max-w-7xl 2xl:mx-auto xl:mx-8">
        <h1 class="text-2xl font-semibold text-gray-900">Vacancies page</h1>
      </div>
    </div>
    <div
      v-for="item of vacations"
      :key="item.id"
      class="bg-white shadow overflow-hidden sm:rounded-md max-w-7xl 2xl:mx-auto xl:mx-8 mt-3 px-2"
    >
      <ul class="divide-y divide-gray-200">
        <li>
          <div
            class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
          >
            <div>
              <client-only>
                <CoreLazyLoading
                  :placeholder="{ style: 'width: 10rem; height: 3.5rem;' }"
                >
                  <img class="h-14 max-w-2xl" :src="item.company_logo" alt="" />
                </CoreLazyLoading>
              </client-only>
            </div>
            <div class="mt-4">
              <span class="text-md font-medium">
                {{ item.title }}
              </span>
            </div>
            <div class="flex items-center mt-2 justify-between">
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>
                  <time datetime="2020-01-07">
                    {{
                      new Date(item.created_at).toLocaleString('en', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    }}
                  </time>
                </p>
              </div>
              <span class="flex items-center text-sm text-gray-500">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ item.location }}
              </span>
            </div>
            <span
              class="absolute top-6 right-6 text-indigo-700 cursor-pointer"
              aria-hidden="true"
              @click="currentVacation = item"
            >
              Find out more
            </span>
          </div>
        </li>
      </ul>
    </div>
    <VacationShowModal
      v-if="currentVacation"
      :modal-open="!!currentVacation"
      :current-vacation="currentVacation ? currentVacation : {}"
      @closeModal="currentVacation = null"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  components: {
    VacationShowModal: () => import('~/components/vacation/VacationShowModal'),
  },
  data: () => ({
    currentVacation: null,
  }),
  computed: {
    ...mapGetters({
      vacations: 'vacations/getVacations',
    }),
  },
}
</script>
