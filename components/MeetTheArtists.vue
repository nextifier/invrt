<template>
  <div class="py-10 lg:py-16">
    <div class="container">
      <h1
        class="font-display uppercase text-3xl lg:text-4xl text-white text-center"
      >
        Meet the Artists
      </h1>

      <div
        v-if="artists && artists.length"
        class="grid grid-cols-2 md:grid-cols-3 gap-x-2 lg:gap-x-4 gap-y-8 mt-6 lg:mt-6"
      >
        <div
          v-for="(artist, index) in artists"
          :key="index"
          class="flex flex-col items-start"
        >
          <img
            :src="require(`~/assets/img/artists/${artist.img}`)"
            :alt="artist.name"
            class="aspect-square w-full bg-gray-900 object-cover"
            loading="lazy"
          />
          <span class="text-white mt-3">{{ artist.name }}</span>
          <a
            :href="`https://www.instagram.com/${artist.ig_username}`"
            target="_blank"
            v-if="artist.ig_username"
            class="mt-1 text-xs sm:text-sm hover:font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-rose-600 transition duration-300"
            >@{{ artist.ig_username }}</a
          >
        </div>

        <div
          class="bg-black text-white aspect-square flex items-center justify-center p-4 lg:p-6 xl:p-8"
        >
          <span
            class="font-bold tracking-tight text-xl lg:text-4xl !leading-tight"
            >More artists will be revealed soon!</span
          >
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
