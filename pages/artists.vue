<template>
  <!-- <MeetTheArtists /> -->
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="-mt-32 flex items-center gap-6">
      <span
        class="w-10 h-px bg-gradient-to-r from-transparent to-primary-lighten"
      ></span>
      <h1
        class="uppercase text-white tracking-[0.8em] text-center flex-shrink-0"
      >
        Coming soon
      </h1>
      <span
        class="w-10 h-px bg-gradient-to-r from-primary-lighten to-transparent"
      ></span>
    </div>

    <!-- <ComingSoonCircle class="h-24 animate-spin-slow" /> -->

    <p class="mt-6">Follow our Instagram so you don't miss the updates.</p>

    <a
      :href="`https://www.instagram.com/${$store.state.instagram}`"
      target="_blank"
      class="flex items-center gap-3 mt-6 border border-gray-700 px-8 py-6 rounded-xl border-dotted"
      v-wave
    >
      <div
        class="p-[3px] rounded-full bg-gradient-to-tr from-[#FCB045] to-[#FD1D1D]"
      >
        <div
          class="bg-black w-16 h-16 rounded-full flex items-center justify-center border-4 border-black"
        >
          <Logo class="h-2.5 text-white" />
        </div>
      </div>

      <div class="flex flex-col items-start">
        <span class="text-white font-bold">INVRT Festival</span>
        <span>invrtfestival</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Artists – ${this.$config.appName}`,
    };
  },
};
</script>

<style></style>
