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
      class="z-[999] menu-list absolute -top-4 right-0 -translate-y-full min-w-[14rem] bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl py-4 px-2"
    >
      <ul class="nav-list flex flex-col w-full">
        <li @click="hideMenu">
          <nuxt-link
            exact
            to="/"
            v-wave
            @click.native="$scrollToTopIfCurrentPageIs('index')"
          >
            <IconHome class="h-5" />
            <span>Home</span>
          </nuxt-link>
        </li>
        <li @click="hideMenu">
          <nuxt-link
            to="/about"
            v-wave
            @click.native="$scrollToTopIfCurrentPageIs('about')"
          >
            <IconAbout class="h-5" />
            <span>About</span>
          </nuxt-link>
        </li>
        <li @click="hideMenu">
          <nuxt-link
            to="/artists"
            v-wave
            @click.native="$scrollToTopIfCurrentPageIs('artists')"
          >
            <IconStar class="h-5" />
            <span>Artists</span>
          </nuxt-link>
        </li>
        <li @click="hideMenu">
          <nuxt-link
            to="/floorplan"
            v-wave
            @click.native="$scrollToTopIfCurrentPageIs('floorplan')"
          >
            <IconFloorplan class="h-5" />
            <span>Floor Plan</span>
          </nuxt-link>
        </li>
        <!-- <li @click="hideMenu">
          <nuxt-link
            to="/contact"
            v-wave
            @click.native="$scrollToTopIfCurrentPageIs('contact')"
          >
            <IconContact class="h-5" />
            <span>Contact</span>
          </nuxt-link>
        </li> -->
        <li @click="hideMenu">
          <nuxt-link
            to="/ticket"
            class=""
            v-wave
            @click.native="$scrollToTopIfCurrentPageIs('ticket')"
          >
            <IconTicket class="h-5" />
            <span>Get Your Ticket</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
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

<style lang="scss" scoped>
.nav-list li {
  @apply w-full;

  & a {
    @apply flex items-center gap-x-3 px-6 py-4 rounded-lg  text-gray-300 transition-colors;

    &.nuxt-link-active {
      @apply bg-gray-900 text-white;
    }
  }
}
</style>
