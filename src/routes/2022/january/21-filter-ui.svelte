<script>
  import clsx from 'clsx'
  import Icon from '$lib/Icon.svelte'

  const options = [
    { name: 'All', checked: true, special: false },
    { name: 'Casual', checked: false, special: false },
    { name: 'Contractor', checked: false, special: true },
    { name: 'Full-time', checked: false, special: false },
    { name: 'Internship', checked: false, special: false },
    { name: 'Remote', checked: false, special: false },
  ]
</script>

<svelte:head>
  <title>Filter UI - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-8 py-4 sm:px-6 lg:px-8">
    <div class="relative mx-auto max-w-lg space-y-4 rounded-2xl bg-white p-8">
      <div
        class="absolute -inset-4 -z-10 rounded-3xl bg-[#F3EFFF] sm:-inset-6 lg:-inset-8"
      />

      <h2 class="text-2xl font-bold text-primary">Filter by</h2>

      <div class="flex flex-col gap-5 sm:flex-row">
        <div class="relative w-full">
          <select
            class="w-full rounded-lg border border-[#C7CCDE] p-4 font-medium text-primary"
          >
            <option value="" disabled selected hidden>Location</option>
          </select>
        </div>

        <div class="relative w-full">
          <select
            class="w-full rounded-lg border border-[#C7CCDE] p-4 font-medium text-primary"
          >
            <option value="" disabled selected hidden>Team</option>
          </select>
        </div>

        <div class="relative w-full">
          <div
            class="relative w-full rounded-lg border border-primary p-4 font-medium text-primary"
          >
            <p>Work Type</p>
            <Icon
              id="chevron-up"
              className="absolute right-2 text-primary w-6 h-6 top-1/2 bottom-1/2 -translate-y-[40%]"
            />
          </div>

          <div
            class="absolute right-0 mt-1 rounded-2xl bg-white p-2 shadow-[0_14px_44px_0_#c7bee250]"
          >
            {#each options as option}
              <div
                class={clsx(
                  option.special && 'rounded-lg bg-[#FBF7FF]',
                  'flex items-center gap-1 p-4 font-medium',
                )}
              >
                <div
                  class={clsx(
                    option.special ? 'bg-[#FBF7FF]' : 'bg-white ',
                    'flex h-6 w-6 items-center justify-center',
                  )}
                >
                  {#if option.checked}
                    <Icon id="check" className="w-6 h-6" />
                  {/if}
                </div>
                <span>
                  {option.name}
                </span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #151234;
  }
</style>
