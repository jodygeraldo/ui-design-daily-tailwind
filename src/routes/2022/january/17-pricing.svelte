<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  const others = [
    { name: 'Oresentation or newsletter', price: '$11.00' },
    { name: 'Magazines and books', price: '$53.00' },
    { name: 'Marketing package', price: '$48.00' },
  ]
</script>

<svelte:head>
  <title>Pricing - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-xl rounded-2xl">
      <div class="space-y-6 rounded-t-3xl bg-white pt-8 text-custom-1">
        <h2 class="text-center text-2xl font-black">Buy this image</h2>

        <div class="flex">
          <button
            class="flex-1 border-b-2 border-custom-1 p-6 text-lg font-semibold"
            >Standard Licenses</button
          >
          <button class="flex-1 p-6 text-lg font-semibold"
            >Royalty free licenses</button
          >
        </div>
      </div>

      <div class="space-y-6 rounded-b-3xl bg-custom-2 px-4 pb-6 pt-12">
        <div class="space-y-2 text-custom-1">
          <div
            class="grid grid-cols-12 rounded-lg bg-white p-6 shadow-[0_4px_24px_0_#34389525]"
          >
            <button
              class="relative col-span-2 h-8 w-8 rounded-full border-2 border-custom-1 bg-white sm:col-span-1"
            >
              <div
                class="absolute inset-1.5 rounded-full bg-custom-1"
              /></button
            >
            <h3 class="col-span-8 text-lg font-bold sm:col-span-9">
              Personal use
            </h3>

            <p
              class="col-span-10 col-start-3 -mt-2 text-lg font-bold sm:col-span-2 sm:col-start-auto sm:mt-0 sm:justify-self-end"
            >
              $11.00
            </p>

            <p
              class="col-span-10 col-start-3 font-semibold text-black sm:col-start-2"
            >
              Personal prints, cards and gifts, or reference for artists.
              Non-commercial use only, not for resale.
            </p>
          </div>

          {#each others as other}
            <div class="grid grid-cols-12 rounded-lg bg-white p-6">
              <button
                class="border-custom-1/60 relative col-span-2 h-8 w-8 rounded-full border-2 bg-white sm:col-span-1"
              />

              <h3 class="col-span-8 text-lg font-bold sm:col-span-9">
                {other.name}
              </h3>

              <p
                class="col-span-10 col-start-3 -mt-2 text-lg font-bold sm:col-span-2 sm:col-start-auto sm:mt-0 sm:justify-self-end"
              >
                {other.price}
              </p>
            </div>
          {/each}
        </div>

        <button
          class="w-full rounded-lg bg-custom-1 p-6 text-lg font-bold text-white"
          >Buy now</button
        >

        <button
          class="w-full rounded-lg border border-custom-1 bg-transparent p-6 text-lg font-bold text-custom-1"
          >Add to cart</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #191a39;
    --color-2: #eef2ff;
  }
</style>
