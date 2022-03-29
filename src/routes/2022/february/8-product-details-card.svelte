<script></script>

<svelte:head>
  <title>Product Details Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="p-8 sm:p-12 lg:p-16 rounded-lg lg:rounded-xl bg-white relative max-w-lg mx-auto shadow-[inset_8px_8px_15px_#c5d3de]"
    >
      <div
        class="absolute -inset-[3px] bg-gradient-to-br from-white to-[#bfd1e1] -z-10 rounded-lg lg:rounded-xl"
      />

      <div
        class="rounded-xl p-5 sm:p-8 lg:p-10 space-y-5 sm:space-y-8 lg:space-y-10 bg-tertiary"
      >
        <div class="space-y-2">
          <h3 class="text-sm font-semibold text-ascent uppercase">Price</h3>
          <p class="font-bold text-lg sm:text-xl lg:text-2xl text-ascent">
            $39.00
          </p>
        </div>

        <div class="space-y-2">
          <h3 class="uppercase font-semibold text-sm text-ascent">Category</h3>
          <p class="font-semibold text-primary">
            <span class="underline">Templates</span>
            <span class="text-ascent">/</span>
            <span class="underline">Websites</span>
          </p>
        </div>

        <div class="space-y-2">
          <h3 class="uppercase font-semibold text-sm text-ascent">License</h3>
          <p class="font-semibold text-primary">
            <span class="underline">Commercial</span>
          </p>
        </div>

        <div class="space-y-6 lg:space-y-8">
          <button
            class="p-3 lg:p-4 w-full bg-gradient-to-br from-[#8037DE] to-primary rounded-lg text-white text-sm lg:text-base font-semibold"
            >Buy now</button
          >
          <p
            class="text-center underline text-primary text-sm lg:text-base font-semibold"
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
