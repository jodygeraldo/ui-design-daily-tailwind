<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Profile - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-xs rounded-3xl bg-gradient-to-br from-white to-[#CBCAFF] px-8 pt-8 pb-16 text-custom-1"
    >
      <div
        class="absolute inset-x-6 -inset-y-12 -z-10 rounded-[11px] bg-custom-1"
      />
      <div
        class="absolute bottom-6 left-6 h-36 w-36 rounded-full bg-[#5EFFC560] blur-2xl"
      />
      <div
        class="absolute right-8 top-16 h-28 w-28 rounded-full bg-[#5E94FF60] blur-2xl"
      />

      <div class="flex justify-end">
        <Icon id="hamburger-menu" class="h-6 w-6 text-custom-1" />
      </div>

      <div class="flex flex-col items-center space-y-6">
        <img
          src="/assets/images/person-3.png"
          class="z-10 h-28 w-28 rounded-full border-8 border-custom-2"
          alt=""
        />

        <div class="space-y-2">
          <h2 class="z-10 text-lg font-bold">Daniel Joffrion</h2>
          <div class="z-10 flex items-center justify-center gap-1">
            <Icon id="globe" class="h-5 w-5" />
            <span class=" z-10 text-sm text-black">Atlanta, GA</span>
          </div>
        </div>

        <button
          class="z-10 rounded-full bg-custom-1 px-4 py-2 text-sm text-white"
          >View Content</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #141a41;
    --color-2: #f1f3ff;
  }
</style>
