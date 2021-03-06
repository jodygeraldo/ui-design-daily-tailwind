<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'
  import type { IconId } from '$lib/IconType'
  import clsx from 'clsx'

  const positions: {
    name: string
    iconId: IconId
    open: number
    special: boolean
  }[] = [
    {
      name: 'Design',
      iconId: 'pencil-1',
      open: 4,
      special: false,
    },
    {
      name: 'Engineering',
      iconId: 'code',
      open: 8,
      special: true,
    },
    {
      name: 'Operations',
      iconId: 'gear',
      open: 2,
      special: false,
    },
    {
      name: 'People',
      iconId: 'person',
      open: 6,
      special: false,
    },
    {
      name: 'Sales',
      iconId: 'file-text',
      open: 7,
      special: false,
    },
    {
      name: 'University',
      iconId: 'backpack',
      open: 8,
      special: false,
    },
  ]
</script>

<svelte:head>
  <title>Job Cards - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="space-y-[72px] rounded-xl bg-white p-4 shadow-2xl shadow-gray-3 lg:p-8 2xl:p-12"
    >
      <h2 class="text-center text-[32px] font-extrabold text-custom-1">
        Open positions
      </h2>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each positions as position}
          <div
            class="col-span-1 space-y-8 rounded-2xl bg-white px-10 py-12 shadow-[0_24px_44px] shadow-[#B4BFE140]"
          >
            <div class="flex items-center justify-center gap-4 text-center">
              <div
                class={clsx(
                  position.name === 'Design' && 'from-[#BBCBFB] to-[#F1D4FF]',
                  position.name === 'Engineering' &&
                    'from-[#FBBBDA] to-[#FFD4D4]',
                  position.name === 'Operations' &&
                    'from-[#BBEBFB] to-[#EFD4FF]',
                  position.name === 'People' && 'from-[#BBFBE4] to-[#D4E0FF]',
                  position.name === 'Sales' && 'from-[#BBD8FB] to-[#FFD4D4]',
                  position.name === 'University' &&
                    'from-[#FFDEC7] to-[#D4D9FF]',
                  'flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br',
                )}
              >
                <Icon id={position.iconId} class="h-8 w-8 text-custom-1" />
              </div>
              <h3 class="text-2xl font-medium text-custom-1">
                {position.name}
              </h3>
            </div>
            <button
              class={`w-full rounded-lg border border-[#C2C5E2] px-6 py-4 text-lg font-medium ${
                position.special ? 'bg-custom-1 text-white' : 'text-custom-1'
              }`}>{position.open} open positions</button
            >
          </div>
        {/each}
      </div>

      <p class="font-medium text-custom-1 opacity-70">
        We are proud to be an equal opportunity employer that values diversity.
        We do not discriminate on the basis of race, religion, color, national
        origin, gender, sexual orientation, age, marital status, veteran status,
        or disability status.
      </p>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #1e2246;
  }
</style>
