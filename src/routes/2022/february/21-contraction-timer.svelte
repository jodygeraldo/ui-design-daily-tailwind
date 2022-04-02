<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'
  import clsx from 'clsx'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  const table = [
    ['6s', '3 min 21 sec', '4:49pm - 4:49pm'],
    ['4s', '16 min 22 sec', '4:49pm - 4:49pm'],
    ['6s', '7 min 41 sec', '4:49pm - 4:49pm'],
    ['12s', '21 min 01 sec', '4:49pm - 4:49pm'],
  ]
</script>

<svelte:head>
  <title>Contraction Timer - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-md rounded-3xl bg-white py-12 px-4 text-primary shadow-[0_24px_27px_0_#6971ba16] 2xl:mb-24"
    >
      <div
        class="absolute top-16 -bottom-24 left-1/2 -right-16 -z-10 hidden rounded-[43px] bg-primary 2xl:block"
      />
      <div class="space-y-8">
        <div class="flex items-center justify-between px-5">
          <button>
            <Icon id="arrow-left" class="h-7 w-7" />
          </button>
          <h2 class="text-lg font-medium">Contraction timer</h2>
          <button>
            <Icon id="bell" class="h-8 w-8" />
          </button>
        </div>

        <div class="text-center">
          <p class="text-5xl font-medium">00:00:11</p>
          <div class="mt-6">
            <p class="font-medium">Time since last contractions</p>
            <p class="font-bold">7 min 32 sec</p>
          </div>
          <button
            class="mt-4 rounded-full bg-primary py-6 px-8 font-bold text-white"
            >Stop timing</button
          >
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full tabular-nums">
            <thead class="font-medium opacity-50">
              <tr class="text-left text-sm sm:text-base">
                <th scope="col" class="p-3">Length</th>
                <th scope="col" class="p-3">Time apart</th>
                <th scope="col" class="p-3">Start & end time</th>
              </tr>
            </thead>
            <tbody>
              {#each table as tr, idx}
                <tr class={clsx(idx % 2 === 0 && 'bg-ascent')}>
                  {#each tr as td, idx}
                    <td
                      class={clsx(
                        idx === 0 && 'rounded-l-lg text-center',
                        idx === 2 && 'rounded-r-lg',
                        'whitespace-nowrap p-4',
                      )}>{td}</td
                    >
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #171a3c;
    --color-ascent: #ebedfd;
  }
</style>
