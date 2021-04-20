<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <sidebar-mobile
      :show-mobile-side-bar="showMobileSideBar"
      @closeSideBar="showMobileSideBar = false"
    />
    <sidebar-desktop />

    <div class="flex flex-col w-0 flex-1">
      <div class="mt-2">
        <button
          class="px-4 border-r border-gray-200 text-gray-500 md:hidden p-2"
          @click="showMobileSideBar = true"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="h-6 w-6"
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>
      <transition name="fade">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    SidebarDesktop: () => import('~/components/sidebar/SidebarDesktop'),
    SidebarMobile: () => import('~/components/sidebar/SidebarMobile'),
  },
  data: () => ({
    showMobileSideBar: false,
  }),
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
