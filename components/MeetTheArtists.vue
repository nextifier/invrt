<template>
  <div class="py-10 lg:py-16">
    <div class="container">
      <h1
        class="font-display lowercase tracking-wider text-3xl lg:text-4xl text-white text-center"
      >
        Meet the Artists
      </h1>

      <div
        v-if="artists && artists.length"
        class="grid grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-x-4 gap-y-12 mt-10 lg:mt-16"
      >
        <div
          v-for="(artist, index) in artists"
          :key="index"
          class="flex flex-col gap-y-3"
        >
          <img
            :src="require(`~/assets/img/artists/${artist.img}`)"
            :alt="artist.name"
            class="aspect-[4/5] w-full bg-gray-900"
            loading="lazy"
          />
          <span class="text-white">{{ artist.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artists: this.$store.state.artists,
    };
  },
};
</script>

<style></style>
