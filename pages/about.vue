<template>
  <div class="pb-10 lg:pb-16">
    <div class="sm:container">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-12 xl:gap-x-16"
      >
        <img
          src="~/assets/img/about-img.webp"
          alt="About INVRT Festival"
          class="aspect-square w-full object-cover pointer-events-none"
          loading="lazy"
        />

        <div class="flex flex-col items-start px-4 sm:px-0">
          <h1
            class="font-display lowercase tracking-wider text-3xl lg:text-4xl text-white text-center"
          >
            Who we are
          </h1>
          <div class="flex flex-col gap-y-3 max-w-xl mt-6">
            <p>
              We are three event organizers who have the same passion for
              electronic music. We are all from different cultures and
              backgrounds, but our passion for the music and the industry has
              brought us together.
            </p>
            <p>
              We strongly believe that the experience of every event should be
              unique, so our mission is to bring a lot of different concepts to
              our events, especially with this new digital era. We think it's
              about the time to step up and create our own local masterpiece.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-16">
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16"
      >
        <div class="flex flex-col">
          <a
            href="https://nusountara.com"
            target="_blank"
            class="flex gap-x-3 items-center hover:opacity-80 transition-opacity"
          >
            <LogoNST class="text-white h-10" />
            <span
              class="font-display tracking-wider lowercase text-white text-2xl"
              >Nusountara</span
            >
          </a>

          <div class="flex flex-col gap-y-3 mt-6">
            <p>
              Nusountara is a platform showcases the diversity of Indonesia
              throughout its music, destinations, fashion, cuisines and
              cultures.
            </p>
            <p>
              Our vision is to Unhide Places, Unmask People & Unleash Parties.
              Our mission is to Unhide Destination & local talents, throughout
              Indonesia. Unmask Local Music, Culture & Communities of the
              respective destination. Unleash a new breed of parties with a full
              blast art & music festival.
            </p>
            <p>
              We are currently focused on a range of divisions such as NST
              Talks, NST Radio, NST Destinations and NST Room. These selective
              groups are created to give more exposure for local musicians to be
              recognized globally.
            </p>
          </div>
        </div>

        <div class="flex flex-col">
          <a
            href="https://www.instagram.com/popsiclesid"
            target="_blank"
            class="flex gap-x-3 items-center hover:opacity-80 transition-opacity"
          >
            <LogoPOP class="text-white h-10" />
            <span
              class="font-display tracking-wider lowercase text-white text-2xl"
              >Popsicles</span
            >
          </a>

          <div class="flex flex-col gap-y-3 mt-6">
            <p>
              We are focusing on integrating online solutions to attract your
              customers such as the following;
            </p>
            <p>
              Creating a virtual platform to replace all the conventional
              events, exhibitions, concerts into digital or online. A virtual
              place where brands and potential targets can interact with each
              other, resulting in virtual engagements.
            </p>
            <p>
              Virtual platform provides a rich source of marketing data because
              each participant can be tracked and evaluated. This helps create a
              virtual engagement index, which is a variable to measure the
              quantity and quality of participant interaction.
            </p>
          </div>
        </div>

        <div class="flex flex-col">
          <a
            href="https://www.instagram.com/nvb_id"
            target="_blank"
            class="flex gap-x-3 items-center hover:opacity-80 transition-opacity"
          >
            <LogoNVB class="text-white h-10" />
            <span
              class="font-display tracking-wider lowercase text-white text-2xl"
              >No Vertical Boundaries</span
            >
          </a>

          <div class="flex flex-col gap-y-3 mt-6">
            <p>
              We are No Vertical Boundaries (NVB) - Our love for electronic
              music has brought us deep into the industry of the nightlife music
              entertainment since we started 15 years ago as a local event
              organizer. From small nightclubs to outdoor open space events, we
              love to bring new ideas to entertain people.
            </p>
            <p>
              In 2011, as part of our mission to explore and spread into
              different parts of today’s electronic music industry, we
              re-invented ourselves as ‘No Vertical Boundaries’ or NVB in short
              and added to our list of specialties: International DJ booking
              agency and event promoter management.
            </p>
            <p>
              We want to create a platform where we can make impactful and
              meaningful and movement for underground electronic music scene in
              Indonesia, from Disco, House to Techno. An online and offline
              platform that can exhibit and provide the people with fun,
              diversity and never ending excitement of our music scene.
            </p>
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
      title: `About – ${this.$config.appName}`,
    };
  },
};
</script>

<style></style>
