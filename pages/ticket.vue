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
                  class="w-full aspect-square object-cover lg:rounded-2xl"
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
                  class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"
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

            <div class="mt-12 flex flex-col items-start">
              <span
                class="text-white text-xs sm:text-sm uppercase tracking-[0.4em]"
                >Overview</span
              >
              <div class="mt-2">{{ event.overview }}</div>
            </div>

            <div class="mt-12 flex flex-col items-start">
              <!-- <span class="text-white uppercase tracking-[0.4em]">Pricing</span>

              <table class="table-fixed w-full max-w-xl mt-4">
                <tbody>
                  <tr>
                    <td class="package-name">Early bird</td>
                    <td class="package-price">Rp350,000</td>
                  </tr>
                  <tr>
                    <td class="package-name">Pre-sale 1</td>
                    <td class="package-price">Rp400,000</td>
                  </tr>
                  <tr>
                    <td class="package-name">Pre-sale 2</td>
                    <td class="package-price">Rp500,000</td>
                  </tr>
                  <tr>
                    <td class="package-name">Pre-sale 3</td>
                    <td class="package-price">Rp600,000</td>
                  </tr>
                  <tr>
                    <td class="package-name">On the spot (&lt;10 PM)</td>
                    <td class="package-price">Rp650,000</td>
                  </tr>
                  <tr>
                    <td class="package-name">On the spot (&gt;10 PM)</td>
                    <td class="package-price">Rp700,000</td>
                  </tr>
                </tbody>
              </table> -->

              <div class="flex flex-col items-start">
                <div>
                  <span
                    class="text-white font-bold tracking-tight text-xl lg:text-2xl"
                    >Rp350,000</span
                  ><span class="text-xs sm:text-sm"> / entry</span>
                </div>

                <p class="mt-2 text-xs sm:text-sm text-gray-400">
                  * The price will be bumped up regularly depending on the
                  selling phases. Get the ticket now for the best available
                  price.
                </p>
              </div>
              <a
                href="https://www.traveloka.com/en-id/activities/category/entertainment?funnel_source=Merchandising.AA.Xperience-LP-web-ID-LandingPage&funnel_id=M_0_516ac880c4028b9a3711e04004d6bd1135cd486b_7_0141beb2c32a2a7a70ef3b9cb50ca4c50ca76bec&internal_source=true"
                target="_blank"
                class="px-6 py-6 bg-white hover:bg-gray-200 text-black font-bold text-base sm:text-lg tracking-tight transition-colors duration-300 mt-6 flex items-baseline gap-x-1.5"
                v-wave
              >
                <span>Buy ticket now on</span>
                <LogoTraveloka class="h-5 lg:h-6" />
              </a>
            </div>

            <div class="mt-16 w-full">
              <ul class="collapsible">
                <li>
                  <div class="collapsible-header">
                    <span
                      class="text-white uppercase text-xs sm:text-sm tracking-[0.4em]"
                      >VIP Packages</span
                    >
                    <button tabindex="-1">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div class="collapsible-body">
                    <div>
                      <table class="table-fixed w-full max-w-xl">
                        <tbody>
                          <tr>
                            <td class="package-name">Standing Tables</td>
                            <td class="package-price">Rp3,000,000</td>
                          </tr>
                          <tr>
                            <td class="package-name">VIP Package A</td>
                            <td class="package-price">Rp15,000,000</td>
                          </tr>
                          <tr>
                            <td class="package-name">VIP Package B</td>
                            <td class="package-price">Rp20,000,000</td>
                          </tr>
                          <tr>
                            <td class="package-name">VIP Package C</td>
                            <td class="package-price">Rp30,000,000</td>
                          </tr>
                          <tr>
                            <td class="package-name">Private Room</td>
                            <td class="package-price">Rp40,000,000</td>
                          </tr>
                        </tbody>
                      </table>

                      <p class="mt-6">
                        For detailed information and VIP reservation, please
                        reach us on the phone number below:
                      </p>

                      <div class="flex mt-6">
                        <a
                          :href="`https://api.whatsapp.com/send?phone=6281234567890&text=Hello,%20${$store.state.appName}!`"
                          target="_blank"
                          class="px-6 py-6 bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 flex items-center gap-x-3"
                          v-wave
                        >
                          <svg
                            class="h-7"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.91478 19.7187C0.373655 16.9212 -0.111562 13.6591 0.548187 10.5311C1.20794 7.40309 2.96839 4.6191 5.50643 2.69007C8.04447 0.76105 11.1898 -0.183578 14.3652 0.0295662C17.5405 0.24271 20.5329 1.59933 22.7929 3.85042C25.053 6.10151 26.4292 9.09606 26.669 12.2844C26.9087 15.4728 25.9959 18.6411 24.0981 21.2078C22.2003 23.7745 19.4447 25.5674 16.3373 26.2574C13.2299 26.9474 9.97896 26.4883 7.18128 24.9643L0 26.8974L1.91478 19.7187ZM7.99346 22.5459C10.246 23.893 12.9112 24.3652 15.4865 23.8737C18.0618 23.3822 20.369 21.9609 21.9731 19.8779C23.5771 17.7948 24.367 15.194 24.1938 12.5661C24.0206 9.93817 22.8963 7.46474 21.0329 5.61236C19.1696 3.75997 16.696 2.65669 14.0787 2.51062C11.4614 2.36455 8.88138 3.18578 6.82527 4.81941C4.76917 6.45305 3.37911 8.78615 2.9173 11.3787C2.4555 13.9712 2.95386 16.6438 4.31839 18.8926L4.59615 19.3506L3.52732 23.3543L7.5384 22.2745L7.99346 22.5459ZM14.7138 18.7433C13.9203 18.4709 13.1606 18.108 12.4495 17.6617C11.0334 16.7787 9.80066 15.6289 8.81914 14.2756C8.51843 13.864 8.23917 13.437 7.98248 12.9964C7.62573 12.4204 7.35548 11.7948 7.18043 11.1396C7.11424 10.8645 7.07941 10.5828 7.07659 10.2998C7.05919 9.80015 7.15371 9.30292 7.35317 8.84485C7.55263 8.38679 7.85194 7.97958 8.229 7.6533C8.44868 7.45676 8.72069 7.32895 9.01165 7.28555C9.3026 7.24216 9.59984 7.28506 9.86687 7.409C10.3843 7.84767 10.7653 8.42655 10.9644 9.07666C11.219 9.53259 11.3396 10.0517 11.3122 10.5738C11.1668 11.0559 10.8995 11.492 10.5364 11.8394C10.436 11.9279 10.3731 12.0517 10.3607 12.1853C10.3483 12.3189 10.3873 12.4522 10.4697 12.5579C11.4401 14.2315 12.9449 15.5267 14.7399 16.2333C14.84 16.2896 14.9571 16.3073 15.0692 16.2829C15.1813 16.2585 15.2807 16.1938 15.3487 16.101C15.6669 15.7065 15.9802 14.9346 16.4707 14.7336C16.7969 14.656 17.1364 14.6539 17.4636 14.7273C17.7907 14.8008 18.097 14.948 18.3593 15.1577C18.8658 15.4606 19.7101 15.8363 19.8469 16.4623C19.9025 16.7706 19.8637 17.0886 19.7354 17.3742C19.5118 17.8446 19.1773 18.2531 18.7609 18.5643C18.3446 18.8754 17.8589 19.0798 17.3462 19.1597C17.1542 19.1966 16.9591 19.215 16.7636 19.2149C16.0586 19.1703 15.3655 19.011 14.7112 18.7433H14.7138Z"
                              fill="white"
                            />
                          </svg>

                          <span>+62 812-3456-7890</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
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
        status: "Ticket will be available soon",
        date: "TBA",
        time: "TBA",
        location: "TBA",
        overview:
          "An exclusive event featuring talented artists that had widely owned their fame through the music, visual & technology industry.",
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

    M.Collapsible.init(document.querySelectorAll(".collapsible"), {
      //   accordion: false
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

th,
td {
  @apply px-3 lg:px-6 py-4 text-left align-middle border border-gray-700;
}

.package-name {
  @apply uppercase;
}

.package-price {
  @apply text-white font-bold;
}

.collapsible {
  @apply w-full space-y-6 mt-6;
}

.collapsible > li {
  @apply rounded-lg overflow-hidden border border-gray-700;
}

.collapsible-header {
  @apply bg-black px-6 py-4 w-full cursor-pointer flex justify-between items-center;
}

.collapsible-body {
  @apply bg-black px-6 pt-3 pb-6 w-full space-y-4 text-gray-200;
}

.collapsible-body {
  @apply hidden;
}

.collapsible-header button {
  @apply outline-none w-8 h-8 hover:bg-gray-800 hover:bg-opacity-60 focus:bg-gray-800 focus:bg-opacity-80 rounded-full flex justify-center items-center;
}

.collapsible-header svg {
  @apply w-5 h-5 transition-all ease-in-out duration-300;
}

.collapsible > li.active > .collapsible-header svg {
  @apply transform rotate-180;
}
</style>
