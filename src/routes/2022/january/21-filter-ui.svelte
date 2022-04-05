<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import Icon from '$lib/Icon.svelte'
  import clsx from 'clsx'

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
    <div class="relative mx-auto max-w-lg rounded-2xl bg-white p-8">
      <div
        class="absolute -inset-4 -z-10 rounded-3xl bg-[#F3EFFF] sm:-inset-6 lg:-inset-8"
      />

      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-custom-1">Filter by</h2>

        <div class="flex flex-col gap-5 sm:flex-row">
          <div class="relative w-full">
            <select
              class="w-full rounded-lg border border-[#C7CCDE] p-4 font-medium text-custom-1"
            >
              <option value="" disabled selected hidden>Location</option>
            </select>
          </div>

          <div class="relative w-full">
            <select
              class="w-full rounded-lg border border-[#C7CCDE] p-4 font-medium text-custom-1"
            >
              <option value="" disabled selected hidden>Team</option>
            </select>
          </div>

          <div class="relative w-full">
            <div
              class="relative w-full rounded-lg border border-custom-1 p-4 font-medium text-custom-1"
            >
              <p>Work Type</p>
              <Icon
                id="chevron-up"
                class="absolute right-2 top-1/2 bottom-1/2 h-6 w-6 -translate-y-[40%] text-custom-1"
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
                      <Icon id="check" class="h-6 w-6" />
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
</div>

<style>
  .theme {
    --color-1: #151234;
  }
</style>
