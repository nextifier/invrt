<template>
  <!-- <MeetTheArtists /> -->
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="-mt-20 flex flex-col items-center gap-6">
      <span
        class="w-px h-16 bg-gradient-to-b from-transparent to-primary-lighten"
      ></span>
      <h1 class="uppercase text-white tracking-[0.8em] text-center">
        Coming soon
      </h1>
      <span
        class="w-px h-16 bg-gradient-to-b from-primary-lighten to-transparent"
      ></span>
    </div>
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
