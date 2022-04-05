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
        class="relative mx-auto w-full max-w-md space-y-3 rounded-[50px] bg-custom-1 px-4 py-8 sm:w-[460px] sm:px-8 sm:py-16"
      >
        <div class="flex items-center gap-2 font-serif">
          <h2 class="text-2xl font-bold">Contributors</h2>
          <div class="rounded bg-custom-2 p-[10px]">
            <span class="text-2xl font-bold">10</span>
          </div>
        </div>
        <div class="relative h-12 sm:h-16">
          <img
            src="/assets/images/person-1.png"
            alt="person 1"
            class="absolute left-0 top-0 h-12 w-12 rounded-full border-4 border-custom-1 sm:h-16 sm:w-16"
          />
          <img
            src="/assets/images/person-2.png"
            alt="person 1"
            class="absolute left-8 top-0 h-12 w-12 rounded-full border-4 border-custom-1 sm:left-12 sm:h-16 sm:w-16"
          />
          <img
            src="/assets/images/person-3.png"
            alt="person 1"
            class="absolute left-16 top-0 h-12 w-12 rounded-full border-4 border-custom-1 sm:left-24 sm:h-16 sm:w-16"
          />
          <img
            src="/assets/images/person-4.png"
            alt="person 1"
            class="absolute left-24 top-0 h-12 w-12 rounded-full border-4 border-custom-1 sm:left-36 sm:h-16 sm:w-16"
          />
          <button
            class="absolute left-32 top-0 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-custom-1 bg-white text-custom-3 sm:left-48 sm:h-16 sm:w-16"
            >+6</button
          >
        </div>

        <div
          class="absolute inset-x-8 -bottom-6 h-1 rounded-full bg-custom-4 blur-xl"
        />
      </div>

      <div
        class="relative mx-auto w-full max-w-xs space-y-7 rounded-[50px] bg-custom-1 px-4 py-5 sm:w-[338px] sm:px-8 sm:py-10"
      >
        <h2 class="font-serif text-2xl font-bold">About</h2>

        <p class="text-lg font-medium">
          Blender addon for reshaping UV selection into grid.
        </p>

        <div class="flex items-center gap-2">
          <Icon id="link-2" class="h-7 w-7 shrink-0" />
          <a
            href="#link"
            class="font-medium underline underline-offset-1 sm:text-lg "
            >www.blendermarket.com</a
          >
        </div>

        <div class="flex items-center gap-2">
          <Icon id="star" class="h-7 w-7 shrink-0" />
          <span class="font-medium sm:text-lg">1.1k stars</span>
        </div>

        <div class="flex items-center gap-2">
          <Icon id="eye-open" class="h-7 w-7 shrink-0" />
          <span class="font-medium sm:text-lg">80 watching</span>
        </div>

        <div
          class="absolute inset-x-8 -bottom-8 h-1 rounded-full bg-custom-4 blur-xl"
        />
      </div>

      <div
        class="relative mx-auto w-full max-w-md space-y-6 rounded-[50px] bg-custom-1 px-4 py-5 sm:w-[449px] sm:px-8 sm:py-10"
      >
        <h2 class="font-serif text-2xl font-bold">Languages</h2>

        <div class="relative h-3">
          <div class="absolute z-10 h-3 w-1/4 rounded-l-full bg-custom-5" />
          <div class="absolute h-3 w-full rounded-full bg-custom-6" />
        </div>

        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <div class="h-4 w-4 rounded-full bg-custom-5" />
            <p class="text-lg font-medium">Phyton</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="h-4 w-4 rounded-full bg-custom-6" />
            <p class="text-lg font-medium">TypeScript</p>
          </div>
        </div>

        <div
          class="absolute inset-x-8 -bottom-8 h-1 rounded-full bg-[#5E0C0720] blur-xl"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #222c85;
    --color-2: #121c75;
    --color-3: #1d184f;
    --color-4: #5e0c07;
    --color-5: #5398ff;
    --color-6: #e4bd31;
  }
</style>
