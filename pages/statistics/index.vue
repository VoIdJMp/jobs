<template>
  <main class="flex-1 relative overflow-y-auto focus:outline-none">
    <div class="my-6">
      <div class="max-w-7xl 2xl:mx-auto xl:mx-8">
        <h1 class="text-2xl font-semibold text-gray-900">Statistics page</h1>
      </div>
    </div>
    <div class="max-w-7xl 2xl:mx-auto xl:mx-8">
      <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    Full Time count
                  </dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">
                      {{ rates[0] }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    Part Time count
                  </dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">
                      {{ rates[1] }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    Total rate
                  </dt>
                  <dd>
                    <div class="text-lg font-medium text-gray-900">
                      {{ vacations.length }}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 max-w-7xl 2xl:mx-auto xl:mx-8">
      <div class="w-80 bg-white overflow-hidden shadow rounded-lg px-5">
        <div class="py-5 border-b border-gray-200">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Rate pie chart
          </h3>
        </div>
        <div class="py-4">
          <pie-chart
            :data="{
              hoverBackgroundColor: 'red',
              hoverBorderWidth: 10,
              labels: ['Full Time', 'Part Time'],
              datasets: [
                {
                  label: 'Statistics',
                  backgroundColor: ['#41B883', '#E46651'],
                  data: rates,
                },
              ],
            }"
            :options="{
              hoverBorderWidth: 20,
            }"
          ></pie-chart>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StatisticsIndex',
  computed: {
    ...mapGetters({
      rates: 'vacations/getRateCount',
      vacations: 'vacations/getVacations',
    }),
  },
}
</script>
