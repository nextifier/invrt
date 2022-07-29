<template>
  <div
    class="fixed right-4 bottom-12 z-[999] md:right-6 lg:hidden"
    v-on-clickaway="hideMenu"
  >
    <button
      type="button"
      @click="showMenu = !showMenu"
      class="bg-black/40 backdrop-blur-md border border-white/20 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-md"
      v-wave
    >
      <div class="flex flex-col">
        <span
          class="h-px w-6 bg-white rounded-full transition-transform duration-300 -translate-y-1"
          :class="{ 'rotate-45 !translate-y-0': showMenu }"
        ></span>
        <span
          class="h-px w-6 bg-white rounded-full transition-transform duration-300 translate-y-1"
          :class="{ '-rotate-45 !translate-y-0': showMenu }"
        ></span>
      </div>
    </button>

    <div
      v-if="showMenu"
      class="z-[999] menu-list absolute -top-4 right-0 -translate-y-full w-60 h-80 bg-black border border-white/20 rounded-xl"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    hideMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      }
    },
  },
};
</script>

<style></style>
