<template>
  <footer class="pt-24">
    <div class="container">
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-x-4">
          <a
            :href="`https://www.instagram.com/${$store.state.instagram}`"
            target="_blank"
            class="p-[3px] rounded-full bg-gradient-to-tr from-[#FCB045] to-[#FD1D1D]"
          >
            <div
              class="bg-black w-16 h-16 rounded-full flex items-center justify-center border-4 border-black"
            >
              <Logo class="h-2.5 text-white" />
            </div>
          </a>

          <div class="flex flex-col items-center gap-y-2">
            <Logo class="text-white h-9" />
            <LogoFestival class="text-white h-2.5" />
          </div>
        </div>

        <div class="flex flex-col items-center mt-10">
          <span class="text-sm">A collaboration between</span>
          <div class="flex gap-x-8 mt-6">
            <a
              href="https://nusountara.com"
              target="_blank"
              class="cursor-pointer"
            >
              <LogoNST
                class="text-gray-300 hover:text-white transition-colors h-12"
              />
            </a>

            <a href="#" target="_blank" class="cursor-pointer">
              <LogoPOP
                class="text-gray-300 hover:text-white transition-colors h-12"
              />
            </a>

            <a href="#" target="_blank" class="cursor-pointer">
              <LogoNVB
                class="text-gray-300 hover:text-white transition-colors h-12"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center gap-x-4 footer-link-list mt-16 text-xs sm:text-sm"
      >
        <nuxt-link to="/terms" class="footer-link">Terms</nuxt-link>
        <span class="w-px h-1 bg-gray-600"></span>
        <nuxt-link to="/privacy" class="footer-link">Privacy</nuxt-link>
        <span class="w-px h-1 bg-gray-600"></span>
        <nuxt-link to="/contact" class="footer-link">Contact</nuxt-link>
      </div>

      <div
        class="py-10 text-xs flex justify-center items-center text-center text-gray-400"
      >
        <span
          >Copyright © {{ new Date().getFullYear() }} INVRT. All rights
          reserved.</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    M.Tooltip.init(document.querySelectorAll(".tooltipped"), {
      position: "bottom",
    });
  },
};
</script>

<style scoped>
.footer-link {
  @apply hover:text-white transition-colors;
}
</style>
