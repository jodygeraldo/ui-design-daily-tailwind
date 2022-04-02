<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import clsx from 'clsx'
  import Icon from '$lib/Icon.svelte'

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

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div
        class="col-span-1 mx-auto max-w-lg space-y-7 self-start rounded-3xl bg-white p-6 pb-16 shadow-[0_4px_0_0_#d8e4ef70]"
      >
        <div
          class="min-w-[240px] rounded-lg bg-[#f6f8fa] p-[10px] text-primary sm:flex"
        >
          {#each tabs as tab}
            <div
              class={clsx(tab.active && 'border-b-2 border-b-primary', 'grow')}
            >
              <a
                href={`#${tab.name}`}
                class="inline-block p-[10px] font-semibold"
              >
                {tab.name}
              </a>
            </div>
          {/each}
        </div>

        <div class="mx-auto grid w-4/5 grid-cols-2 gap-y-6 gap-x-4">
          <div class="col-span-2 space-y-1">
            <p class="text-sm font-semibold">Status</p>
            <div class="relative flex">
              <input
                type="text"
                value="Active Duty"
                class="w-0 flex-1 truncate rounded border border-[#d8e4ef] p-4"
              />
              <Icon
                id="chevron-down"
                class="absolute top-1/2 bottom-1/2 right-4 h-5 w-5 -translate-y-1/2"
              />
            </div>
          </div>
          <div class="col-span-2 space-y-1 sm:col-span-1">
            <p class="text-sm font-semibold">Pay Grade</p>
            <div class="relative flex">
              <input
                type="text"
                value="E-9"
                class="w-0 flex-1 truncate rounded border border-[#d8e4ef] p-4"
              />
              <Icon
                id="chevron-down"
                class="absolute top-1/2 bottom-1/2 right-4 h-5 w-5 -translate-y-1/2"
              />
            </div>
          </div>
          <div class="col-span-2 space-y-1 sm:col-span-1">
            <p class="text-sm font-semibold">Years of Service</p>
            <div class="relative flex">
              <input
                type="text"
                value="Over 20"
                class="w-0 flex-1 truncate rounded border border-[#d8e4ef] p-4"
              />
              <Icon
                id="chevron-down"
                class="absolute top-1/2 bottom-1/2 right-4 h-5 w-5 -translate-y-1/2"
              />
            </div>
          </div>
          <button
            class="col-span-2 rounded bg-primary p-4 font-semibold text-white"
          >
            Next: Allowances
          </button>
        </div>
      </div>

      <div
        class="relative col-span-1 mx-auto max-w-xs space-y-8 rounded-3xl bg-[#E9EFF5] p-[42px] text-primary"
      >
        <div
          class="absolute inset-x-0 -inset-y-2 -z-10 translate-x-3 rotate-[5.11deg] rounded-3xl bg-white"
        />
        <div class="space-y-2 font-semibold">
          <p>Basic Pay</p>
          <p class="text-4xl">$7,544</p>
        </div>
        <div class="space-y-2 font-semibold">
          <p>Allowances</p>
          <p class="text-4xl">$250</p>
        </div>
        <div class="space-y-2 font-semibold">
          <p>Special Pay</p>
          <p class="text-4xl">$0</p>
        </div>
        <div class="h-0.5 w-full bg-white" />
        <div class="space-y-2 font-semibold">
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
