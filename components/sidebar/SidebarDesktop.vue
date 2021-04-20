<template>
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64">
      <div
        class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto"
      >
        <div class="flex items-center flex-shrink-0 px-4">
          <span class="text-2xl mx-auto">Jobs</span>
        </div>
        <div class="mt-5 flex-grow flex flex-col">
          <nav class="flex-1 px-2 bg-white space-y-1">
            <nuxt-link
              :to="{ name: 'index' }"
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              :class="
                !currentPage
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              "
            >
              <svg
                class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"
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
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              Vacancies
            </nuxt-link>

            <nuxt-link
              :to="{ name: 'statistics' }"
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              :class="
                currentPage
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              "
            >
              <svg
                class="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Statistics
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarDesktop',
  data: () => ({
    currentPage: 0,
  }),
  watch: {
    $route() {
      this.currentPage = !(this.$route.name === 'index')
    },
  },
  created() {
    this.currentPage = !(this.$route.name === 'index')
  },
}
</script>

<style scoped></style>
