<template>
  <div class="py-10 lg:py-16">
    <div class="container">
      <div class="max-w-2xl mx-auto flex flex-col items-center text-center">
        <h1
          class="font-display uppercase text-3xl lg:text-4xl text-white text-center"
        >
          CIBIS Park Warehouse
        </h1>
        <a
          href="https://goo.gl/maps/i4LFfi7bjR7CSKh58"
          target="_blank"
          class="text-xs sm:text-sm mt-3 hover:underline"
        >
          Jl. TB Simatupang No.2, RT.13/RW.5, Cilandak Tim., Kec. Ps. Minggu,
          Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560
        </a>
      </div>

      <div class="mt-10 w-full max-w-4xl mx-auto">
        <iframe
          class="aspect-[3/4] lg:aspect-video w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.778375633802!2d106.81239491527623!3d-6.292831563344539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f107613f0fd7%3A0xa4f7f5baa987e30d!2sCIBIS%20Park!5e0!3m2!1sen!2sid!4v1659690376652!5m2!1sen!2sid"
          style="border: 0; filter: grayscale(100%) invert(90%) contrast(100%)"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

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
          src="~/assets/img/floorplan/floorplan-2.webp"
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
