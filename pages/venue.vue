<template>
  <div class="py-10 lg:py-16">
    <div class="container">
      <h1
        class="font-display uppercase text-3xl lg:text-4xl text-white text-center"
      >
        Venue
      </h1>

      <div class="mt-10 lg:mt-16 flex flex-col gap-12 max-w-4xl mx-auto">
        <img
          src="~/assets/img/floorplan/floorplan-1.jpg"
          alt="Floor Plan Outdoor"
          class="w-full materialboxed"
          width="1400"
          height="754"
          loading="lazy"
        />

        <img
          src="~/assets/img/floorplan/floorplan-2.jpg"
          alt="Floor Plan Outdoor"
          class="w-full materialboxed"
          width="1400"
          height="788"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Venue – ${this.$config.appName}`,
    };
  },

  mounted() {
    M.Materialbox.init(document.querySelectorAll(".materialboxed"), {});
  },
};
</script>

<style></style>
