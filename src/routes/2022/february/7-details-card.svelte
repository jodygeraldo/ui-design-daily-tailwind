<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Details Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-8 py-20">
    <div
      class="relative mx-auto max-w-lg rounded-xl bg-ascent p-8 shadow-[0_39px_25px_0_#a15b4116] lg:rounded-3xl lg:p-16"
    >
      <div
        class="absolute -top-6 -left-6 right-6 bottom-3 -z-10 rounded-xl bg-[#C5AEA7] md:-top-12 md:-left-12 md:right-12 md:bottom-6 lg:-top-16 lg:-left-16 lg:right-16 lg:bottom-12 lg:rounded-3xl"
      />
      <div class="space-y-4 lg:space-y-8">
        <div class="flex items-center justify-between">
          <p class="text-sm font-bold uppercase text-primary lg:text-base">
            About the community
          </p>
          <Icon id="dots-horizontal" class="h-6 w-6 text-primary" />
        </div>

        <div class="space-y-5 lg:space-y-10">
          <div class="space-y-4">
            <h2 class="text-xl font-bold text-primary lg:text-3xl">
              Blender Renders
            </h2>
            <p class="text-lg font-semibold text-primary lg:text-2xl">
              A place where beginner Blender artists can post their creations
              and get feedback on.
            </p>
          </div>

          <div class="flex w-1/2 gap-10 lg:gap-20">
            <div class="space-y-2">
              <p class="text-xl font-bold text-primary lg:text-3xl">13.5K</p>
              <p class="font-semibold text-primary lg:text-lg">Members</p>
            </div>

            <div class="space-y-2">
              <p class="text-xl font-bold text-primary lg:text-3xl">47</p>
              <p class="font-semibold text-primary lg:text-lg">Online</p>
            </div>
          </div>

          <div class="justify-between gap-4 sm:flex lg:gap-6">
            <button
              class="w-full rounded-lg border border-black p-4 font-semibold text-primary lg:p-6 lg:text-lg"
              >Joined</button
            >
            <button
              class="mt-4 w-full rounded-lg bg-primary p-4 font-semibold text-white lg:mt-0 lg:p-6 lg:text-lg"
              >Create Post</button
            >
          </div>

          <p class="text-sm font-semibold text-tertiary lg:text-base">
            Created Feb.7, 2021
          </p>
        </div>
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
