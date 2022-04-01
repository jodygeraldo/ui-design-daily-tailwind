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

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="rounded-3xl py-12 px-4 text-primary bg-white max-w-md mx-auto space-y-8 shadow-[0_24px_27px_0_#6971ba16] relative 2xl:mb-24"
    >
      <div
        class="hidden 2xl:block absolute top-16 -bottom-24 left-1/2 -right-16 bg-primary rounded-[43px] -z-10"
      />
      <div class="flex items-center justify-between px-5">
        <button>
          <Icon id="arrow-left" className="w-7 h-7" />
        </button>
        <h2 class="font-medium text-lg">Contraction timer</h2>
        <button>
          <Icon id="bell" className="w-8 h-8" />
        </button>
      </div>

      <div class="text-center">
        <p class="font-medium text-5xl">00:00:11</p>
        <div class="mt-6">
          <p class="font-medium">Time since last contractions</p>
          <p class="font-bold">7 min 32 sec</p>
        </div>
        <button
          class="mt-4 text-white font-bold rounded-full py-6 px-8 bg-primary"
          >Stop timing</button
        >
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full tabular-nums">
          <thead class="font-medium opacity-50">
            <tr class="text-sm sm:text-base text-left">
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
                      'p-4 whitespace-nowrap',
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

<style>
  .theme {
    --color-primary: #171a3c;
    --color-ascent: #ebedfd;
  }
</style>
