<template>
  <div
    id="hero"
    class="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] w-full"
  >
    <div class="absolute inset-0 z-0 hidden lg:block">
      <img
        src="~/assets/img/hero-img.jpg"
        alt="INVRT Festival"
        class="w-full lg:w-auto lg:h-[calc(100vh-5rem)] lg:mx-auto"
      />
    </div>
    <div class="relative z-10">
      <div class="sm:container">
        <div class="grid grid-cols-1 lg:grid-cols-12">
          <div
            class="lg:col-span-5 xl:col-span-4 lg:h-[calc(100vh-5rem)] pt-12 lg:pt-16 xl:pt-24 px-4 lg:px-0 order-1 z-10"
          >
            <div
              class="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <h1
                class="text-white text-6xl lg:text-7xl font-display lowercase tracking-wider"
              >
                INVRT Music Festival
              </h1>
              <p class="mt-3 !leading-normal">
                An exclusive event featuring talented artists that had widely
                owned their fame through the music, visual & technology
                industry.
              </p>
              <div class="flex flex-col xs:flex-row gap-4 mt-6">
                <nuxt-link
                  to="/ticket"
                  class="bg-primary hover:bg-primary-darken text-white transition-colors px-6 py-4 text-center"
                  v-wave
                  >Get your ticket</nuxt-link
                >
                <nuxt-link
                  to="/artists"
                  class="bg-black/40 lg:backdrop-blur-lg hover:bg-gray-900/80 text-gray-300 lg:text-white transition-colors px-6 py-4 text-center"
                  v-wave
                  >See the artists</nuxt-link
                >
              </div>
            </div>
          </div>
          <div
            class="lg:col-span-3 xl:col-span-4 order-3 lg:order-2 mt-[-50%] z-0"
          >
            <img
              src="~/assets/img/hero-img.jpg"
              alt="INVRT Festival"
              class="w-full lg:hidden"
            />
          </div>
          <div
            class="lg:col-span-4 xl:col-span-4 lg:h-[calc(100vh-5rem)] flex flex-row justify-between items-center lg:flex-col lg:items-end lg:justify-end py-16 px-4 lg:px-0 order-2 lg:order-3 z-10"
          >
            <InvrtFestivalCircular class="h-24" />
            <div
              class="flex flex-col gap-y-3 text-right items-end text-white lg:mt-24"
            >
              <span class="font-bold tracking-tight text-3xl lg:text-4xl"
                >Oct 1<span class="align-super text-sm">st</span>, 2022</span
              >
              <span class="font-bold tracking-tight text-xl lg:text-2xl"
                >7 PM - 4 AM</span
              >
              <span>Cibis Park Cilandak</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
