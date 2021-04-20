<template>
  <div
    v-if="sidebarOpen"
    :class="sidebarOpen ? 'fixed inset-0 flex z-40 md:hidden' : ''"
    role="dialog"
    aria-modal="true"
  >
    <div
      :class="
        sidebarOpen
          ? 'fixed inset-0 bg-gray-600 bg-opacity-75'
          : 'transition-opacity ease-linear duration-300'
      "
      aria-hidden="true"
    ></div>

    <div
      :class="
        sidebarOpen
          ? 'relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'
          : 'transition ease-in-out duration-300 transform'
      "
    >
      <div
        :class="
          sidebarOpen
            ? 'absolute top-0 right-0 -mr-12 pt-2'
            : 'ease-in-out duration-300'
        "
      >
        <button
          v-if="sidebarOpen"
          class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          @click="$emit('closeSideBar', false)"
        >
          <span class="sr-only">Close sidebar</span>
          <svg
            class="h-6 w-6 text-white"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="flex-shrink-0 flex items-center px-4">
        <div class="flex items-center flex-shrink-0 px-4">
          <span class="text-2xl mx-auto">Jobs</span>
        </div>
      </div>
      <div class="mt-5 flex-1 h-0 overflow-y-auto">
        <nav class="px-2 space-y-1">
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

    <div class="flex-shrink-0 w-14" aria-hidden="true"></div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMobile',
  props: { showMobileSideBar: { type: Boolean, default: false } },
  data: () => ({
    sidebarOpen: true,
    currentPage: 0,
  }),
  watch: {
    $route() {
      this.currentPage = !(this.$route.name === 'index')
    },
    showMobileSideBar() {
      this.sidebarOpen = this.showMobileSideBar
    },
  },
  created() {
    this.sidebarOpen = this.showMobileSideBar
    this.currentPage = !(this.$route.name === 'index')
  },
}
</script>

<style scoped></style>
