<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-2">
        <div class="lg:col-span-2 lg:row-span-2 aspect-square">
          <img
            :src="require(`~/assets/img/gallery/${galleryImages[0].name}`)"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="lg:col-span-1 lg:row-span-1 aspect-square">
          <img
            :src="require(`~/assets/img/gallery/${galleryImages[1].name}`)"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="lg:col-span-1 lg:row-span-2 w-full h-full">
          <img
            :src="require(`~/assets/img/gallery/${galleryImages[2].name}`)"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="lg:col-span-1 lg:row-span-1 aspect-square">
          <img
            :src="require(`~/assets/img/gallery/${galleryImages[3].name}`)"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryImages: [
        {
          name: "01.webp",
        },
        {
          name: "02.webp",
        },
        {
          name: "03.webp",
        },
        {
          name: "04.webp",
        },
        {
          name: "05.webp",
        },
      ],
    };
  },
};
</script>

<style></style>
