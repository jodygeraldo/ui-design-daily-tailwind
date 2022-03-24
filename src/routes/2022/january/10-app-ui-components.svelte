<script>
  import clsx from 'clsx'
  import Icon from '/src/components/Icon.svelte'

  const list = [
    { name: 'Overview', iconId: 'home', selected: false },
    { name: 'My files', iconId: 'file-text', selected: true },
    { name: 'Recent', iconId: 'clock', selected: false },
    { name: 'Starred', iconId: 'star', selected: false },
    { name: 'Trash', iconId: 'trash', selected: false },
  ]
</script>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
      <div class="relative p-[30px] col-span-1 self-start">
        <div
          class="absolute rounded-[34px] bg-white/40 inset-0 pointer-events-none opacity-50 border-2 border-white"
        />
        <div class="rounded-3xl shadow-xl p-[50px] bg-white">
          <div class="flex gap-[14px] items-center">
            <div class="w-16 h-16 flex justify-center items-center">
              <Icon id="github" className="w-12 h-12" />
            </div>
            <h2 class="font-bold text-2xl text-primary">Storage</h2>
          </div>

          <div class="space-y-2 mt-4">
            <div class=" relative w-full bg-tertiary rounded-full h-[9px]">
              <div
                class="absolute w-1/6 bg-primary top-0 left-0 rounded-full h-[9px] bg-black"
              />
              <div class="w-full" />
            </div>
            <p class="text-ascent">384.8 MB of 30 GB used</p>
          </div>

          <button class="mt-9 rounded-md bg-black text-white p-4 w-full text-lg"
            >Buy storage</button
          >
        </div>
      </div>

      <div class="relative p-[30px] col-span-1 self-start">
        <div
          class="absolute rounded-[34px] bg-white/40 inset-0 pointer-events-none opacity-50 border-2 border-white"
        />
        <div class="rounded-3xl shadow-xl bg-white p-6">
          <ul class="space-y-2">
            {#each list as item}
              <li
                class={clsx(
                  item.selected && 'bg-tertiary',
                  'flex space-x-2 items-center rounded-lg p-6',
                )}
              >
                <Icon id={item.iconId} className="h-8 w-8 text-primary" />
                <p class="text-lg text-black">{item.name}</p>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div class="relative p-[30px] col-span-1 self-start">
        <div
          class="absolute rounded-[34px] bg-white/40 inset-0 pointer-events-none opacity-50 border-2 border-white"
        />
        <div class="p-[50px] space-y-8 bg-white rounded-3xl shadow-xl">
          <h2 class="font-bold text-2xl">Preferred Language</h2>

          <div class="space-y-8">
            <div class="flex gap-[113px] items-center">
              <div class="space-y-2">
                <p class="text-lg">English</p>
                <p class="text-lg">United States</p>
              </div>
              <Icon id="pencil-1" className="h-8 w-8 text-primary" />
            </div>
            <div class="flex gap-[113px] items-center">
              <div class="space-y-2">
                <p class="text-lg">English</p>
                <p class="text-lg">United States</p>
              </div>
              <Icon id="pencil-1" className="h-8 w-8 text-primary" />
            </div>
          </div>

          <button
            class="rounded-md bg-black text-white p-4 w-full text-lg flex justify-center gap-2"
          >
            <Icon id="plus" className="h-8 w-8" />
            <span>Buy storage</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #0c0f2b;
    --color-ascent: #494e76;
    --color-tertiary: #edf1ff;
  }
</style>
