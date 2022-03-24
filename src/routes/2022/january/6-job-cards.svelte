<script>
  import Icon from '/src/components/Icon.svelte'
  import clsx from 'clsx'

  const positions = [
    {
      name: 'Design',
      iconId: 'github',
      open: 4,
      special: false,
    },
    {
      name: 'Engineering',
      iconId: 'discord',
      open: 8,
      special: true,
    },
    {
      name: 'Operations',
      iconId: 'reset',
      open: 2,
      special: false,
    },
    {
      name: 'People',
      iconId: 'linkedin',
      open: 6,
      special: false,
    },
    {
      name: 'Sales',
      iconId: 'twitter',
      open: 7,
      special: false,
    },
    {
      name: 'University',
      iconId: 'clock',
      open: 8,
      special: false,
    },
  ]
</script>

<div class="theme bg-app grid place-content-center min-h-screen">
  <div class="space-y-[72px] container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-extrabold text-[32px] text-primary text-center">
      Open positions
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each positions as position}
        <div
          class="col-span-1 rounded-2xl bg-white px-10 py-12 space-y-8 shadow-[0_24px_44px] shadow-[#B4BFE140]"
        >
          <div class="flex gap-4 items-center text-center justify-center">
            <div
              class={clsx(
                position.name === 'Design' && 'from-[#BBCBFB] to-[#F1D4FF]',
                position.name === 'Engineering' &&
                  'from-[#FBBBDA] to-[#FFD4D4]',
                position.name === 'Operations' && 'from-[#BBEBFB] to-[#EFD4FF]',
                position.name === 'People' && 'from-[#BBFBE4] to-[#D4E0FF]',
                position.name === 'Sales' && 'from-[#BBD8FB] to-[#FFD4D4]',
                position.name === 'University' && 'from-[#FFDEC7] to-[#D4D9FF]',
                'bg-gradient-to-br w-16 h-16 flex justify-center items-center rounded-2xl shrink-0',
              )}
            >
              <Icon id={position.iconId} className="w-8 h-8 text-primary" />
            </div>
            <h3 class="font-medium text-2xl text-primary">{position.name}</h3>
          </div>
          <button
            class={`border border-[#C2C5E2] rounded-lg px-6 py-4 w-full font-medium text-lg ${
              position.special ? 'bg-primary text-white' : 'text-primary'
            }`}>{position.open} open positions</button
          >
        </div>
      {/each}
    </div>

    <p class="font-medium text-primary opacity-70">
      We are proud to be an equal opportunity employer that values diversity. We
      do not discriminate on the basis of race, religion, color, national
      origin, gender, sexual orientation, age, marital status, veteran status,
      or disability status.
    </p>
  </div>
</div>

<style>
  .theme {
    --color-primary: #1e2246;
    --color-ascent: #5ac1d8;
    --text-color-high: #ffffff;
    --text-color-low: #838faa;
  }
</style>
