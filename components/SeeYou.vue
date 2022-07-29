<template>
  <div>
    <div class="sm:container">
      <div class="flex flex-col items-center">
        <img
          src="~/assets/img/see-you-at-the-party.jpg"
          alt="See you at the party"
          class="w-full pointer-events-none"
          width="1920"
          height="1282"
          loading="lazy"
        />

        <div
          class="px-4 sm:px-0 -mt-8 lg:-mt-16 flex flex-col items-center text-center"
        >
          <h2
            class="text-white text-4xl lg:text-5xl font-display lowercase tracking-wider"
          >
            See you<br />
            at the party!
          </h2>

          <span class="bg-primary w-0.5 h-24 my-6"></span>

          <div
            class="flex flex-col gap-y-3 text-center items-center text-white"
          >
            <span
              v-if="$store.state.event.date"
              class="font-bold tracking-tight text-3xl lg:text-4xl"
              >{{ $store.state.event.date }}</span
            >
            <span
              v-if="$store.state.event.time"
              class="font-bold tracking-tight text-xl lg:text-2xl"
              >{{ $store.state.event.time }}</span
            >
            <span v-if="$store.state.event.location">{{
              $store.state.event.location
            }}</span>
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
