<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>Details Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-8 py-20">
    <div
      class="p-8 lg:p-16 rounded-xl lg:rounded-3xl space-y-4 lg:space-y-8 bg-ascent max-w-lg mx-auto shadow-[0_39px_25px_0_#a15b4116] relative"
    >
      <div
        class="absolute -top-6 -left-6 right-6 bottom-3 md:-top-12 md:-left-12 md:right-12 md:bottom-6 lg:-top-16 lg:-left-16 lg:right-16 lg:bottom-12 -z-10 bg-[#C5AEA7] rounded-xl lg:rounded-3xl"
      />
      <div class="flex justify-between items-center">
        <p class="text-primary font-bold text-sm lg:text-base uppercase">
          About the community
        </p>
        <Icon id="dots-horizontal" className="w-6 h-6 text-primary" />
      </div>

      <div class="space-y-5 lg:space-y-10">
        <div class="space-y-4">
          <h2 class="font-bold text-xl lg:text-3xl text-primary">
            Blender Renders
          </h2>
          <p class="text-lg lg:text-2xl font-semibold text-primary">
            A place where beginner Blender artists can post their creations and
            get feedback on.
          </p>
        </div>

        <div class="w-1/2 flex gap-10 lg:gap-20">
          <div class="space-y-2">
            <p class="font-bold text-xl lg:text-3xl text-primary">13.5K</p>
            <p class="font-semibold lg:text-lg text-primary">Members</p>
          </div>

          <div class="space-y-2">
            <p class="font-bold text-xl lg:text-3xl text-primary">47</p>
            <p class="font-semibold lg:text-lg text-primary">Online</p>
          </div>
        </div>

        <div class="sm:flex justify-between gap-4 lg:gap-6">
          <button
            class="p-4 lg:p-6 rounded-lg lg:text-lg font-semibold border border-black text-primary w-full"
            >Joined</button
          >
          <button
            class="mt-4 lg:mt-0 p-4 lg:p-6 rounded-lg lg:text-lg font-semibold bg-primary w-full text-white"
            >Create Post</button
          >
        </div>

        <p class="text-tertiary text-sm lg:text-base font-semibold">
          Created Feb.7, 2021
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #1e1411;
    --color-ascent: #ede9e2;
    --color-tertiary: #433e3c;
  }
</style>
