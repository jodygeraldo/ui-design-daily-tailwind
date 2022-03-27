<script>
  import clsx from 'clsx'
  import Icon from '/src/components/Icon.svelte'

  const list = [
    { name: 'BTC', imageUrl: 'btc.png', love: false, selected: false },
    { name: 'ETH', imageUrl: 'eth.png', love: false, selected: true },
    { name: 'Doge', imageUrl: 'doge.png', love: false, selected: false },
    { name: 'ALGO', imageUrl: 'algo.png', love: true, selected: false },
    { name: 'ADA', imageUrl: 'ada.png', love: false, selected: false },
    { name: 'LUNA', imageUrl: 'luna.png', love: false, selected: false },
  ]
</script>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="max-w-md mx-auto rounded-3xl space-y-9 px-8 pt-12 pb-10 bg-white shadow-[0_13px_30px_0_#afbbea40] relative"
    >
      <div
        class="absolute -left-6 right-6 -top-6 bottom-12 bg-[#ccd5f9] -z-10 rounded-3xl"
      />

      <div class="px-4">
        <div class="flex mb-6">
          <button
            class="w-full text-white bg-primary px-2 py-1 sm:py-[10px] sm:px-6 rounded-l border border-ascent"
            >All</button
          >
          <button
            class="w-full text-black bg-white px-2 py-1 sm:py-[10px] sm:px-6 border-y border-ascent border-r"
            >USDT</button
          >
          <button
            class="w-full text-black bg-white px-2 py-1 sm:py-[10px] sm:px-6 border-y border-ascent"
            >BUSD</button
          >
          <button
            class="w-full bg-white px-2 py-1 sm:py-[10px] sm:px-6 rounded-r border border-ascent flex justify-center items-center"
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
            class="w-full rounded-lg border border-ascent py-4 pl-12 pr-4 placeholder:text-primary/60 bg-[#f2f5ff]"
            placeholder="Search ETH, BTC, ..."
          />
        </div>
      </div>

      <div class="rounded space-y-1">
        {#each list as item}
          <div
            class={clsx(
              item.selected && 'bg-[#F2F5FF]',
              'flex justify-between items-center p-4 rounded',
            )}
          >
            <div class="flex items-center gap-2">
              <img
                class="w-[50px] h-[50px] rounded-full"
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
