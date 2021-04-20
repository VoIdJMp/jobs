<template>
  <div
    :class="isOpen ? 'fixed z-10 inset-0 overflow-y-auto' : ''"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        :class="
          isOpen
            ? 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            : 'ease-in duration-200'
        "
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>
      <div
        :class="
          isOpen
            ? 'inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6'
            : 'ease-in duration-200'
        "
      >
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button
            type="button"
            class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="$emit('closeModal', {})"
          >
            <span class="sr-only">Close</span>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <div class="mt-3 sm:mt-5">
            <h3
              id="modal-title"
              class="text-lg leading-6 font-medium text-gray-900"
            >
              {{ currentVacation.title }}
            </h3>
            <div class="mt-2">
              <p
                class="text-sm text-gray-500"
                v-html="currentVacation.description"
              ></p>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-sm font-medium truncate">Company url:</p>
          <a
            :href="currentVacation.company_url"
            class="mt-2 text-sm text-indigo-500"
          >
            <span class="truncate">{{ currentVacation.company_url }}</span>
          </a>
        </div>
        <div class="mt-5">
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            @click="$emit('closeModal', {})"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VacationShowModal',
  props: {
    modalOpen: { type: Boolean, default: false },
    currentVacation: { type: Object, required: true },
  },
  data: () => ({
    isOpen: false,
  }),
  mounted() {
    this.isOpen = this.modalOpen
  },
}
</script>
