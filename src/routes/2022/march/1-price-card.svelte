<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Price Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-lg space-y-10 rounded-[30px] bg-white p-6 text-primary shadow-[0_34px_94px_-30px_#b3c7e3] sm:p-10 lg:p-14"
    >
      <div class="space-y-6">
        <div class="space-y-10">
          <div class="space-y-[10px]">
            <h3 class="text-4xl font-black">549, -</h3>
            <p class="text-lg font-medium">Pay now, later or split up.</p>
          </div>

          <div class="space-y-4">
            <button
              class="w-full rounded-lg bg-gradient-to-br from-[#5FF489] to-[#79F4F4] p-6 text-lg font-bold uppercase"
              >Buy online</button
            >
            <p class="text-lg font-medium">
              <span class="font-bold">18 in online storage</span> - can be shipped
              today
            </p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-center gap-1">
            <div
              class="rounded-full bg-gradient-to-br from-[#E9E8FF] to-[#E7F3FF] p-2"
            >
              <Icon id="check" class="w-6 h-6 shrink-0" />
            </div>
            <p class="text-lg font-bold">
              <span class="underline underline-offset-1">Free shipping</span> over
              NOK 800
            </p>
          </div>

          <div class="flex items-center gap-1">
            <div
              class="rounded-full bg-gradient-to-br from-[#E9E8FF] to-[#E7F3FF] p-2"
            >
              <Icon id="check" class="w-6 h-6 shrink-0" />
            </div>
            <p class="text-lg font-bold underline underline-offset-1">
              Lightning fast delivery
            </p>
          </div>
        </div>

        <div class="space-y-5 rounded-lg bg-[#F3F5FF] p-4">
          <h3 class="text-lg font-bold text-black">
            See how fast you can get the item
          </h3>

          <div class="items-center gap-2 sm:flex">
            <div class="relative flex flex-1">
              <input
                type="text"
                class="w-0 flex-1 truncate rounded-lg border border-[#B3C7E3] p-4 pl-12 placeholder:text-lg placeholder:font-bold placeholder:text-primary"
                placeholder="Zip Code"
              />
              <Icon
                id="magnifying-glass"
                class="w-7 h-7 text-primary absolute top-1/2 bottom-1/2 left-4 -translate-y-1/2"
              />
            </div>
            <button
              class="mt-4 w-full rounded-lg bg-white p-4 text-lg font-bold sm:mt-0 sm:w-auto"
              >Check</button
            >
          </div>
        </div>
      </div>

      <button
        class="w-full rounded-lg bg-gradient-to-br from-[#9CC4FF] to-[#B4A8FF] p-6 text-lg font-bold uppercase"
        >Pick up in store</button
      >
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #292e5a;
  }
</style>
