<script>
  const others = [
    { name: 'Oresentation or newsletter', price: '$11.00' },
    { name: 'Magazines and books', price: '$53.00' },
    { name: 'Marketing package', price: '$48.00' },
  ]
</script>

<svelte:head>
  <title>Pricing - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="rounded-2xl max-w-xl mx-auto">
      <div class="bg-white text-primary space-y-6 pt-8 rounded-t-3xl">
        <h2 class="font-black text-2xl text-center">Buy this image</h2>

        <div class="flex">
          <button
            class="text-lg font-semibold flex-1 p-6 border-b-2 border-primary"
            >Standard Licenses</button
          >
          <button class="text-lg font-semibold flex-1 p-6"
            >Royalty free licenses</button
          >
        </div>
      </div>

      <div class="px-4 pb-6 pt-12 rounded-b-3xl space-y-6 bg-ascent">
        <div class="space-y-2 text-primary">
          <div
            class="p-6 rounded-lg bg-white shadow-[0_4px_24px_0_#34389525] grid-cols-12 grid"
          >
            <button
              class="w-8 h-8 bg-white border-2 border-primary rounded-full relative col-span-2 sm:col-span-1"
            >
              <div class="absolute inset-1.5 bg-primary rounded-full" /></button
            >
            <h3 class="font-bold text-lg col-span-8 sm:col-span-9">
              Personal use
            </h3>

            <p
              class="font-bold text-lg col-span-10 col-start-3 sm:col-start-auto sm:col-span-2 sm:justify-self-end -mt-2 sm:mt-0"
            >
              $11.00
            </p>

            <p
              class="font-semibold text-black col-span-10 col-start-3 sm:col-start-2"
            >
              Personal prints, cards and gifts, or reference for artists.
              Non-commercial use only, not for resale.
            </p>
          </div>

          {#each others as other}
            <div class="p-6 rounded-lg bg-white grid-cols-12 grid">
              <button
                class="w-8 h-8 bg-white border-2 border-primary/60 rounded-full relative col-span-2 sm:col-span-1"
              />

              <h3 class="font-bold text-lg col-span-8 sm:col-span-9">
                {other.name}
              </h3>

              <p
                class="font-bold text-lg col-span-10 col-start-3 sm:col-start-auto sm:col-span-2 sm:justify-self-end -mt-2 sm:mt-0"
              >
                {other.price}
              </p>
            </div>
          {/each}
        </div>

        <button
          class="w-full bg-primary p-6 rounded-lg text-lg font-bold text-white"
          >Buy now</button
        >

        <button
          class="border border-primary p-6 bg-transparent rounded-lg text-lg font-bold text-primary w-full"
          >Add to cart</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #191a39;
    --color-ascent: #eef2ff;
  }
</style>
