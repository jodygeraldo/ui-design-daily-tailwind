<script>
  import clsx from 'clsx'
  import Icon from '/src/components/Icon.svelte'

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

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-8 sm:px-6 lg:px-8 py-4">
    <div class="rounded-2xl p-8 space-y-4 bg-white relative max-w-lg mx-auto">
      <div
        class="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-[#F3EFFF] rounded-3xl -z-10"
      />

      <h2 class="font-bold text-2xl text-primary">Filter by</h2>

      <div class="flex gap-5 flex-col sm:flex-row">
        <div class="w-full relative">
          <select
            class="rounded-lg p-4 w-full font-medium border border-[#C7CCDE] text-primary"
          >
            <option value="" disabled selected hidden>Location</option>
          </select>
        </div>

        <div class="w-full relative">
          <select
            class="rounded-lg p-4 w-full font-medium border border-[#C7CCDE] text-primary"
          >
            <option value="" disabled selected hidden>Team</option>
          </select>
        </div>

        <div class="w-full relative">
          <div
            class="rounded-lg p-4 w-full font-medium border border-primary text-primary relative"
          >
            <p>Work Type</p>
            <Icon
              id="chevron-up"
              className="absolute right-2 text-primary w-6 h-6 top-1/2 bottom-1/2 -translate-y-[40%]"
            />
          </div>

          <div
            class="absolute right-0 mt-1 bg-white rounded-2xl p-2 shadow-[0_14px_44px_0_#c7bee250]"
          >
            {#each options as option}
              <div
                class={clsx(
                  option.special && 'bg-[#FBF7FF]',
                  'p-4 font-medium flex gap-1 items-center',
                )}
              >
                <div
                  class={clsx(
                    option.special ? 'bg-[#FBF7FF]' : 'bg-white ',
                    'w-6 h-6 flex justify-center items-center',
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
