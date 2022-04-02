<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Cards UI Design - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 items-start gap-20 text-white lg:grid-cols-2 2xl:grid-cols-3"
    >
      <div
        class="mx-auto space-y-3 rounded-[50px] bg-primary px-4 py-8 sm:px-8 sm:py-16 w-full sm:w-[460px] relative max-w-md"
      >
        <div class="flex items-center gap-2 font-serif">
          <h2 class="text-2xl font-bold">Contributors</h2>
          <div class="rounded bg-[#121C75] p-[10px]">
            <span class="text-2xl font-bold">10</span>
          </div>
        </div>
        <div class="relative h-12 sm:h-16">
          <img
            src="/assets/images/person-1.png"
            alt="person 1"
            class="absolute left-0 top-0 h-12 w-12 rounded-full border-4 border-primary sm:h-16 sm:w-16"
          />
          <img
            src="/assets/images/person-2.png"
            alt="person 1"
            class="absolute left-8 sm:left-12 top-0 h-12 w-12 rounded-full border-4 border-primary sm:h-16 sm:w-16"
          />
          <img
            src="/assets/images/person-3.png"
            alt="person 1"
            class="absolute left-16 sm:left-24 top-0 h-12 w-12 rounded-full border-4 border-primary sm:h-16 sm:w-16"
          />
          <img
            src="/assets/images/person-4.png"
            alt="person 1"
            class="absolute left-24 sm:left-36 top-0 h-12 w-12 rounded-full border-4 border-primary sm:h-16 sm:w-16"
          />
          <button
            class="absolute left-32 sm:left-48 top-0 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-primary bg-white text-[#1D184F] sm:h-16 sm:w-16"
            >+6</button
          >
        </div>

        <div
          class="absolute bg-[#5E0C07] h-1 -bottom-6 inset-x-8 blur-xl rounded-full"
        />
      </div>

      <div
        class="mx-auto space-y-7 rounded-[50px] bg-primary px-4 py-5 sm:px-8 sm:py-10 sm:w-[338px] relative w-full max-w-xs"
      >
        <h2 class="font-serif font-bold text-2xl">About</h2>

        <p class="font-medium text-lg">
          Blender addon for reshaping UV selection into grid.
        </p>

        <div class="flex gap-2 items-center">
          <Icon id="link-2" className="w-7 h-7 shrink-0" />
          <a
            href="#link"
            class="font-medium sm:text-lg underline underline-offset-1 "
            >www.blendermarket.com</a
          >
        </div>

        <div class="flex gap-2 items-center">
          <Icon id="star" className="w-7 h-7 shrink-0" />
          <span class="font-medium sm:text-lg">1.1k stars</span>
        </div>

        <div class="flex gap-2 items-center">
          <Icon id="eye-open" className="w-7 h-7 shrink-0" />
          <span class="font-medium sm:text-lg">80 watching</span>
        </div>

        <div
          class="absolute bg-[#5E0C07] h-1 -bottom-8 inset-x-8 blur-xl rounded-full"
        />
      </div>

      <div
        class="mx-auto space-y-6 rounded-[50px] bg-primary px-4 py-5 sm:px-8 sm:py-10 w-full sm:w-[449px] relative max-w-md"
      >
        <h2 class="font-bold text-2xl font-serif">Languages</h2>

        <div class="relative h-3">
          <div class="absolute w-1/4 z-10 h-3 bg-[#5398FF] rounded-l-full" />
          <div class="absolute w-full h-3 bg-[#E4BD31] rounded-full" />
        </div>

        <div class="flex gap-6 items-center">
          <div class="flex gap-2 items-center">
            <div class="w-4 h-4 bg-[#5398ff] rounded-full" />
            <p class="font-medium text-lg">Phyton</p>
          </div>
          <div class="flex gap-2 items-center">
            <div class="w-4 h-4 bg-[#E4BD31] rounded-full" />
            <p class="font-medium text-lg">TypeScript</p>
          </div>
        </div>

        <div
          class="absolute bg-[#5E0C0720] h-1 -bottom-8 inset-x-8 blur-xl rounded-full"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #222c85;
    --color-ascent: #5e0c07;
  }
</style>
