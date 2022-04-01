<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Profile - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="rounded-3xl bg-gradient-to-br from-white to-[#CBCAFF] pt-8 px-8 pb-16 relative max-w-xs mx-auto text-primary"
    >
      <div
        class="absolute inset-x-6 -inset-y-12 bg-primary rounded-[11px] -z-10"
      />
      <div
        class="blur-2xl w-36 h-36 bg-[#5EFFC560] rounded-full absolute bottom-6 left-6"
      />
      <div
        class="blur-2xl w-28 h-28 bg-[#5E94FF60] rounded-full absolute right-8 top-16"
      />

      <div class="flex justify-end">
        <Icon id="hamburger-menu" className="w-6 h-6 text-primary" />
      </div>

      <div class="flex flex-col items-center space-y-6">
        <img
          src="/assets/images/person-3.png"
          class="border-8 border-ascent rounded-full h-28 w-28 z-10"
          alt=""
        />

        <div class="space-y-2">
          <h2 class="font-bold text-lg z-10">Daniel Joffrion</h2>
          <div class="flex gap-1 items-center justify-center z-10">
            <Icon id="globe" className="w-5 h-5" />
            <span class=" z-10 text-black text-sm">Atlanta, GA</span>
          </div>
        </div>

        <button
          class="px-4 py-2 rounded-full bg-primary text-white text-sm z-10"
          >View Content</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #141a41;
    --color-ascent: #f1f3ff;
  }
</style>
