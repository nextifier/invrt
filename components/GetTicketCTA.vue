<template>
  <div>
    <div class="container">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-12 xl:gap-x-16"
      >
        <div class="lg:col-span-7">
          <img
            src="~/assets/img/invrt-wristband-ticket.webp"
            alt="INVRT Tickets"
            class="w-full pointer-events-none"
            width="889"
            height="357"
            loading="lazy"
          />
        </div>
        <div
          class="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center"
        >
          <h2 class="text-white text-4xl lg:text-5xl font-display uppercase">
            Tickets are running out!
          </h2>
          <div class="mt-14">
            <nuxt-link
              to="/ticket"
              class="uppercase bg-white text-black px-10 py-6 font-bold relative hover:bg-gray-200 transition-colors"
              v-wave
              >Get it now

              <span
                class="absolute top-0 -translate-y-1/2 right-0 translate-x-1/3 rotate-6 uppercase bg-primary text-white font-bold text-xs px-3 py-2 rounded-full"
              >
                Hurry up!
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
