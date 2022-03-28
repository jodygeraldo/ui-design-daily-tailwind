<script>
  import clsx from 'clsx'
  import Icon from '/src/components/Icon.svelte'

  const tabs = [
    {
      name: 'Basic Pay',
      active: true,
    },
    {
      name: 'Allowances',
      active: false,
    },
    {
      name: 'Special Pay',
      active: false,
    },
    {
      name: 'Summary',
      active: false,
    },
  ]
</script>

<svelte:head>
  <title>Cards - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div
        class="col-span-1 rounded-3xl p-6 pb-16 space-y-7 bg-white max-w-lg mx-auto shadow-[0_4px_0_0_#d8e4ef70] self-start"
      >
        <div
          class="p-[10px] bg-[#f6f8fa] rounded-lg sm:flex text-primary min-w-[240px]"
        >
          {#each tabs as tab}
            <div
              class={clsx(tab.active && 'border-b-2 border-b-primary', 'grow')}
            >
              <a
                href={`#${tab.name}`}
                class="inline-block font-semibold p-[10px]"
              >
                {tab.name}
              </a>
            </div>
          {/each}
        </div>

        <div class="w-4/5 mx-auto gap-y-6 grid grid-cols-2 gap-x-4">
          <div class="space-y-1 col-span-2">
            <p class="text-sm font-semibold">Status</p>
            <div class="flex relative">
              <input
                type="text"
                value="Active Duty"
                class="p-4 rounded border border-[#d8e4ef] w-0 flex-1 truncate"
              />
              <Icon
                id="chevron-down"
                className="w-5 h-5 absolute top-1/2 bottom-1/2 right-4 -translate-y-1/2"
              />
            </div>
          </div>
          <div class="space-y-1 col-span-2 sm:col-span-1">
            <p class="text-sm font-semibold">Pay Grade</p>
            <div class="flex relative">
              <input
                type="text"
                value="E-9"
                class="p-4 rounded border border-[#d8e4ef] w-0 flex-1 truncate"
              />
              <Icon
                id="chevron-down"
                className="w-5 h-5 absolute top-1/2 bottom-1/2 right-4 -translate-y-1/2"
              />
            </div>
          </div>
          <div class="space-y-1 col-span-2 sm:col-span-1">
            <p class="text-sm font-semibold">Years of Service</p>
            <div class="flex relative">
              <input
                type="text"
                value="Over 20"
                class="p-4 rounded border border-[#d8e4ef] w-0 flex-1 truncate"
              />
              <Icon
                id="chevron-down"
                className="w-5 h-5 absolute top-1/2 bottom-1/2 right-4 -translate-y-1/2"
              />
            </div>
          </div>
          <button
            class="col-span-2 font-semibold text-white bg-primary p-4 rounded"
          >
            Next: Allowances
          </button>
        </div>
      </div>

      <div
        class="col-span-1 bg-[#E9EFF5] p-[42px] rounded-3xl space-y-8 max-w-xs text-primary mx-auto relative"
      >
        <div
          class="absolute inset-x-0 -inset-y-2 bg-white -z-10 rounded-3xl translate-x-3 rotate-[5.11deg]"
        />
        <div class="font-semibold space-y-2">
          <p>Basic Pay</p>
          <p class="text-4xl">$7,544</p>
        </div>
        <div class="font-semibold space-y-2">
          <p>Allowances</p>
          <p class="text-4xl">$250</p>
        </div>
        <div class="font-semibold space-y-2">
          <p>Special Pay</p>
          <p class="text-4xl">$0</p>
        </div>
        <div class="w-full h-0.5 bg-white" />
        <div class="font-semibold space-y-2">
          <p>Basic Pay</p>
          <p class="text-4xl">$7,794 <span class="text-sm">Monthly</span></p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #20194b;
  }
</style>
