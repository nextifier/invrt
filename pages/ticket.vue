<template>
  <div class="sm:pt-16 pb-24 lg:pb-32">
    <div class="sm:container">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-16 xl:gap-x-24"
      >
        <div class="lg:col-span-6 lg:pl-4">
          <div
            v-swiper="swiperOption"
            :instance-name="event.slug"
            class="group"
            ref="swiperTop"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(image, index) in event.images"
                :key="index"
                class="swiper-slide slide-item"
              >
                <img
                  :src="require(`~/assets/img/gallery/${image}`)"
                  class="w-full aspect-video object-cover lg:rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              class="swiper-button-prev !hidden md:!flex !-translate-x-20 group-hover:!translate-x-2 transition-transform"
            >
              <IconArrowLeft class="w-5 h-5 stroke-current" />
            </div>
            <div
              class="swiper-button-next !hidden md:!flex !translate-x-20 group-hover:!-translate-x-2 transition-transform"
            >
              <IconArrowRight class="w-5 h-5 stroke-current" />
            </div>
          </div>

          <div
            v-swiper="swiperThumbsOption"
            :instance-name="`${event.slug}-thumbs`"
            ref="swiperThumbs"
            class="gallery-thumbs mt-4"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(image, index) in event.images"
                :key="index"
                class="swiper-slide slide-item"
              >
                <img
                  :src="require(`~/assets/img/gallery/${image}`)"
                  class="aspect-square object-cover rounded-xl smooth-corners sc-4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6 px-4 lg:pl-0">
          <div class="flex flex-col items-start lg:pt-8">
            <div
              class="flex items-center gap-x-2 px-4 py-4 rounded-full bg-gray-900 text-white text-xs sm:text-sm"
            >
              <span class="flex h-3 w-3 relative">
                <span
                  class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                ></span>
              </span>
              <span>{{ event.status }}</span>
            </div>

            <h1
              class="font-bold tracking-tight text-white text-3xl lg:text-5xl mt-4 flex items-center gap-x-1"
            >
              {{ event.title }}
            </h1>

            <div class="flex flex-col gap-y-4 mt-6">
              <div class="flex items-center gap-x-3">
                <IconCalendar class="h-5 sm:h-6" />
                <span>{{ event.date }}</span>
              </div>

              <div v-if="event.time" class="flex items-center gap-x-3">
                <IconTime class="h-5 sm:h-6" />
                <span>{{ event.time }}</span>
              </div>

              <div class="flex items-center gap-x-3">
                <IconLocation class="h-5 sm:h-6" />
                <span>{{ event.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Get the Ticket – ${this.event.title}`,
    };
  },

  data() {
    return {
      event: {
        title: "INVRT Festival",
        status: "Ticket Available",
        date: "TBA",
        time: "TBA",
        location: "TBA",
        overview: `
          <p>An exclusive event featuring talented artists that had widely owned their fame through the music, visual & technology industry.</p>
        `,
        images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
      },

      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        grabCursor: true,
        slidesPerView: 1,
      },
      swiperThumbsOption: {
        grabCursor: true,
        slidesPerView: 5,
        spaceBetween: 5,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        touchRatio: 0.2,
        centeredSlides: true,
      },
    };
  },

  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss" scoped>
.gallery-thumbs .swiper-slide {
  @apply opacity-60;

  &.swiper-slide-active {
    @apply opacity-100;
  }
}
</style>
