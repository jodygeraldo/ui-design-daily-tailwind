<script>
  import clsx from 'clsx'
  import Icon from '$lib/Icon.svelte'

  const list = [
    { name: 'BTC', imageUrl: 'btc.png', love: false, selected: false },
    { name: 'ETH', imageUrl: 'eth.png', love: false, selected: true },
    { name: 'Doge', imageUrl: 'doge.png', love: false, selected: false },
    { name: 'ALGO', imageUrl: 'algo.png', love: true, selected: false },
    { name: 'ADA', imageUrl: 'ada.png', love: false, selected: false },
    { name: 'LUNA', imageUrl: 'luna.png', love: false, selected: false },
  ]
</script>

<svelte:head>
  <title>Filter - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-md space-y-9 rounded-3xl bg-white px-8 pt-12 pb-10 shadow-[0_13px_30px_0_#afbbea40]"
    >
      <div
        class="absolute -left-6 right-6 -top-6 bottom-12 -z-10 rounded-3xl bg-[#ccd5f9]"
      />

      <div class="px-4">
        <div class="mb-6 flex">
          <button
            class="w-full rounded-l border border-ascent bg-primary px-2 py-1 text-white sm:py-[10px] sm:px-6"
            >All</button
          >
          <button
            class="w-full border-y border-r border-ascent bg-white px-2 py-1 text-black sm:py-[10px] sm:px-6"
            >USDT</button
          >
          <button
            class="w-full border-y border-ascent bg-white px-2 py-1 text-black sm:py-[10px] sm:px-6"
            >BUSD</button
          >
          <button
            class="flex w-full items-center justify-center rounded-r border border-ascent bg-white px-2 py-1 sm:py-[10px] sm:px-6"
          >
            <Icon id="heart" className="h-5 w-5 text-[#2C3E50]" />
          </button>
        </div>

        <div class="relative">
          <Icon
            id="magnifying-glass"
            className="absolute w-7 h-7 top-1/2 bottom-1/2 -translate-y-1/2 text-[#0F1B4A] left-4"
          />
          <input
            type="search"
            class="placeholder:text-primary/60 w-full rounded-lg border border-ascent bg-[#f2f5ff] py-4 pl-12 pr-4"
            placeholder="Search ETH, BTC, ..."
          />
        </div>
      </div>

      <div class="space-y-1 rounded">
        {#each list as item}
          <div
            class={clsx(
              item.selected && 'bg-[#F2F5FF]',
              'flex items-center justify-between rounded p-4',
            )}
          >
            <div class="flex items-center gap-2">
              <img
                class="h-[50px] w-[50px] rounded-full"
                src={`/assets/images/${item.imageUrl}`}
                alt=""
              />
              <h3>{item.name}</h3>
            </div>
            {#if item.love}
              <Icon id="heart-filled" className="w-5 h-5 text-[#0F1B4A]" />
            {:else}
              <Icon id="heart" className="w-5 h-5 text-[#0F1B4A]" />
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #4a6fff;
    --color-ascent: #dde1f4;
    --color-tertiary: #2c3e50;
  }
</style>
