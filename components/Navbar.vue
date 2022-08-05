<template>
  <div>
    <header
      class="fixed z-[998] w-full h-16 lg:h-20 flex items-center justify-center transition-all duration-300 ease-in-out bg-black"
    >
      <div class="container mx-auto h-full flex items-center">
        <nuxt-link
          to="/"
          @click.native="$scrollToTopIfCurrentPageIs('index')"
          class="brand-logo flex flex-col items-center gap-y-1.5 lg:gap-y-2 flex-shrink-0"
          v-wave
        >
          <Logo class="h-6 sm:h-7 text-white" />
          <!-- <LogoFestival class="h-2 lg:h-2.5" /> -->
        </nuxt-link>

        <nav
          class="hidden absolute left-1/2 -translate-x-1/2 lg:flex lg:items-center gap-x-3"
        >
          <nuxt-link
            exact
            to="/"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('index')"
            v-wave
          >
            <span>Home</span>
          </nuxt-link>

          <nuxt-link
            to="/about"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('about')"
            v-wave
          >
            <span>About</span>
          </nuxt-link>

          <nuxt-link
            to="/artists"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('artists')"
            v-wave
          >
            <span>Artists</span>
          </nuxt-link>

          <nuxt-link
            to="/venue"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('venue')"
            v-wave
          >
            <span>Venue</span>
          </nuxt-link>

          <!-- <nuxt-link
            to="/contact"
            class="nav-link flex"
            @click.native="$scrollToTopIfCurrentPageIs('contact')"
            v-wave
          >
            <span>Contact</span>
          </nuxt-link> -->
        </nav>

        <div class="flex items-center gap-x-5 ml-auto">
          <nuxt-link
            to="/ticket"
            class="border border-white !leading-none text-white px-5 py-3 lg:px-6 lg:py-4 hover:bg-primary hover:border-transparent transition-colors font-display uppercase flex items-center justify-center"
            @click.native="$scrollToTopIfCurrentPageIs('ticket')"
            v-wave
          >
            <span>Get your ticket</span>
          </nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-link {
  @apply px-6 py-4 hover:bg-gray-900 flex justify-center items-center transition-colors relative h-full rounded-lg text-gray-200 flex-shrink-0 font-display uppercase;

  &.nuxt-link-active {
    @apply underline decoration-gray-500 decoration-2 underline-offset-8 text-white;
  }
}
</style>
