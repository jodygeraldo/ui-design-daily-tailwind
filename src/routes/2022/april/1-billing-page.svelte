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

  const navbar: {
    name: string
    iconId: IconId
    active: boolean
  }[] = [
    { name: 'General', iconId: 'dashboard', active: false },
    { name: 'Password', iconId: 'lock-closed', active: false },
    { name: 'Invitations', iconId: 'envelope-closed', active: false },
    { name: 'Billing', iconId: 'id-card', active: true },
    { name: 'Apps', iconId: 'padding', active: false },
  ]

  const table = {
    head: ['Date', 'Type', 'Receipt'],
    body: [
      { date: 'Oct. 21, 2021', type: 'Pro Annual', selected: false },
      { date: 'Aug. 21, 2021', type: 'Pro Portfolio', selected: true },
      { date: 'Jul. 21, 2021', type: 'Sponsored Post', selected: false },
      { date: 'JUn. 21, 2021', type: 'Sponsored Post', selected: false },
    ],
  }
</script>

<svelte:head>
  <title>Billing Page - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-12 shadow-[0_49px_32px_-19px_#38389615]">
      <div class="lg:col-span-3 2xl:col-span-2 bg-custom-5 py-12 rounded-l-3xl">
        <div class="h-full flex flex-col gap-10">
          <div class="flex gap-3 items-center px-10">
            <img
              src="/assets/images/person-10.png"
              alt=""
              class="w-10 h-10 xl:w-14 xl:h-14"
            />
            <div>
              <h3 class="font-bold text-custom-1">Ildiko Gaspar</h3>
              <p class="text-sm text-custom-3">@igaspar</p>
            </div>
          </div>

          <div class="flex flex-col justify-between flex-1">
            <nav class="px-6 space-y-2">
              {#each navbar as nav}
                <button
                  class={clsx(
                    nav.active ? 'text-custom-1' : 'text-custom-3',
                    'p-4 relative w-full',
                  )}
                >
                  <a class="text-sm flex gap-2.5 items-center " href="#link">
                    <Icon id={nav.iconId} class="h-7 w-7" />
                    <span>{nav.name}</span>
                  </a>
                  {#if nav.active}
                    <div
                      class="absolute -left-2 top-0 h-full w-1.5 bg-custom-2 rounded-full"
                    />
                  {/if}
                </button>
              {/each}
            </nav>

            <button class="text-custom-3 flex items-center py-2 px-6 gap-2.5">
              <Icon id="exit" class="w-7 h-7" />
              <span class="text-sm">Log out</span>
            </button>
          </div>
        </div>
      </div>

      <div
        class="-ml-px lg:col-span-9 2xl:col-span-10 bg-gradient-to-br from-white to-custom-5 px-8 pt-12 pb-16 rounded-r-3xl"
      >
        <h2 class="text-custom-1 font-bold text-2xl sm:text-3xl pl-4">
          Billing
        </h2>
        <div class="grid grid-cols-3 mt-10 gap-10">
          <div class="col-span-2">
            <div class="pl-4">
              <h3 class="text-custom-1 font-bold">Order History</h3>
              <p class="mt-1 text-custom-3 font-medium text-sm">
                Manage billing information and view receips
              </p>
            </div>

            <div class="mt-8 flex flex-col">
              <div class="overflow-x-auto">
                <div class="inline-block min-w-full">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead>
                        <tr>
                          {#each table.head as th, i}
                            <th
                              scope="col"
                              class={clsx(
                                i === 0 ? 'pr-3 pl-4' : 'px-3',
                                'text-left text-sm font-medium text-custom-3',
                              )}>{th}</th
                            >
                          {/each}
                        </tr>
                      </thead>
                      <tbody>
                        {#each table.body as td}
                          <tr
                            class={clsx(
                              td.selected &&
                                'bg-white shadow-[0_8px_19px_0_#dfdffd60] rounded-2xl pl-4',
                            )}
                          >
                            <td
                              class="whitespace-nowrap pl-4 py-2 pr-3 font-medium text-custom-1"
                              >{td.date}</td
                            >
                            <td
                              class="whitespace-nowrap px-3 py-2 text-custom-1"
                              >{td.type}</td
                            >
                            <td class="whitespace-nowrap px-3 py-2">
                              <button
                                class="font-medium text-custom-1 px-4 py-2 border border-custom-4 rounded-lg"
                                >Download</button
                              >
                            </td>
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#load"
              class="underline underline-offset-1 font-medium text-custom-2 pl-2 mt-2 inline-block"
              >Load more</a
            >

            <div class="pl-4 mt-10">
              <h3 class="text-custom-1 font-bold">Payment Method</h3>
              <p class="mt-1 text-custom-3 font-medium text-sm">
                Manage billing information and view receips
              </p>
            </div>

            <div class="mt-4 flex justify-between items-center pl-4">
              <div class="flex-1 flex items-center gap-4">
                <div
                  class="p-2.5 border border-custom-4 flex justify-center items-center rounded-md"
                >
                  <img src="/assets/images/visa.png" alt="" class="h-10" />
                </div>
                <p class="font-medium text-custom-1">Visa ending in 2255</p>
              </div>

              <button
                class="font-medium text-custom-1 px-4 py-2 border border-custom-4 rounded-lg"
                >Remove</button
              >
            </div>
          </div>

          <div
            class="col-span-1 p-8 bg-custom-2 text-white rounded-2xl shadow-[0_8px_19px_0_#dfdffd60] self-start"
          >
            <h4 class="font-medium">Your plan</h4>

            <div class="mt-4">
              <p class="font-bold text-xl sm:text-2xl">Pro Annual</p>
              <p class="mt-1 font-medium text-sm">Renews on Nov. 2021</p>
            </div>

            <button
              class="mt-4 font-medium px-4 py-2 border border-white/50 rounded-lg"
              >Cancel subscription</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #1a194d;
    --color-2: #ee4d38;
    --color-3: #62618f;
    --color-4: #cbcbd9;
    --color-5: #f8f8ff;
  }
</style>
