<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Product Details Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-lg rounded-lg bg-white p-8 shadow-[inset_8px_8px_15px_#c5d3de] sm:p-12 lg:rounded-xl lg:p-16"
    >
      <div
        class="absolute -inset-[3px] -z-10 rounded-lg bg-gradient-to-br from-white to-[#bfd1e1] lg:rounded-xl"
      />

      <div
        class="space-y-5 rounded-xl bg-tertiary p-5 sm:space-y-8 sm:p-8 lg:space-y-10 lg:p-10"
      >
        <div class="space-y-2">
          <h3 class="text-sm font-semibold uppercase text-ascent">Price</h3>
          <p class="text-lg font-bold text-ascent sm:text-xl lg:text-2xl">
            $39.00
          </p>
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-semibold uppercase text-ascent">Category</h3>
          <p class="font-semibold text-primary">
            <span class="underline">Templates</span>
            <span class="text-ascent">/</span>
            <span class="underline">Websites</span>
          </p>
        </div>

        <div class="space-y-2">
          <h3 class="text-sm font-semibold uppercase text-ascent">License</h3>
          <p class="font-semibold text-primary">
            <span class="underline">Commercial</span>
          </p>
        </div>

        <div class="space-y-6 lg:space-y-8">
          <button
            class="w-full rounded-lg bg-gradient-to-br from-[#8037DE] to-primary p-3 text-sm font-semibold text-white lg:p-4 lg:text-base"
            >Buy now</button
          >
          <p
            class="text-center text-sm font-semibold text-primary underline lg:text-base"
          >
            Open a shop
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #3a37de;
    --color-ascent: #0d0c44;
    --color-tertiary: #ebf1f6;
  }
</style>
