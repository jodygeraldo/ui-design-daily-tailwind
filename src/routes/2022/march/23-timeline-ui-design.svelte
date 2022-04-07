<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import clsx from 'clsx'

  const timeline = [
    {
      text: 'The shipment has arrived at the terminal.',
      time: 'March 23 at 08.20 - 5020 BERGEN',
    },
    {
      text: 'The shipment is in transit.',
      time: 'March 22 at 07.20 - 0024 OSLO',
    },
    {
      text: 'The broadcast is sorted and forwarded.',
      time: 'March 22 at 00.38 - 0024 OSLO',
    },
    {
      text: 'Consignment has been dispatched to the terminal and forwarded.',
      time: 'March 22 at 00.33 - 0024 OSLO',
    },
    {
      text: "We have received information about the shipment, which is currently with the sender or is on its way to Bring's terminal. The tracking is updated when the shipment has arrived at the terminal in the receiving country.",
      time: 'March 21 at 07.35',
    },
  ]
</script>

<svelte:head>
  <title>Timeline UI Design - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-xl rounded-3xl bg-white px-4 py-6 shadow-[0_34px_64px_0_#60679f20] sm:py-8 sm:px-6 md:px-8 lg:p-10 xl:p-12"
    >
      <div
        class="absolute -top-16 bottom-[40%] -left-16 right-[45%] -z-10 hidden rounded-3xl bg-custom-4 2xl:block"
      />

      <div>
        <h2 class="text-2xl font-bold text-custom-1 sm:text-3xl">
          Package Details
        </h2>
        <div
          class="mt-6 items-center justify-between rounded-xl border border-custom-2 bg-custom-3 p-4 sm:mt-8 sm:flex sm:p-6"
        >
          <div class="mt-2 sm:mt-0">
            <div class="flex items-center gap-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
              >
                <path
                  d="M11 2.75L18.3333 6.875V15.125L11 19.25L3.66666 15.125V6.875L11 2.75Z"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 11L18.3333 6.875"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 11V19.25"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 11L3.66666 6.875"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6667 4.8125L7.33334 8.9375"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-sm font-medium uppercase text-custom-4">Weight</p>
            </div>
            <p class="mt-2 text-custom-1">373325383577912985</p>
          </div>

          <div class="mt-2 sm:mt-0">
            <div class="flex items-center gap-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
              >
                <path
                  d="M11 8.25V19.25M11 19.25C9.05508 19.25 7.18982 18.4774 5.81455 17.1021C4.43928 15.7268 3.66667 13.8616 3.66667 11.9167M11 19.25C12.9449 19.25 14.8102 18.4774 16.1855 17.1021C17.5607 15.7268 18.3333 13.8616 18.3333 11.9167M19.25 11.9167H17.4167M4.58333 11.9167H2.75"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 8.25C12.5188 8.25 13.75 7.01878 13.75 5.5C13.75 3.98122 12.5188 2.75 11 2.75C9.48122 2.75 8.25 3.98122 8.25 5.5C8.25 7.01878 9.48122 8.25 11 8.25Z"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-sm font-medium uppercase text-custom-4">Weight</p>
            </div>
            <p class="mt-2 text-custom-1">0.3 kg</p>
          </div>

          <div class="mt-2 sm:mt-0">
            <div class="flex items-center gap-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
              >
                <path
                  d="M15.5833 2.75L19.25 6.41667L6.41667 19.25L2.75 15.5833L15.5833 2.75Z"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6667 6.41666L13.2917 5.04166"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9167 9.16666L10.5417 7.79166"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16669 11.9167L7.79169 10.5417"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.41669 14.6667L5.04169 13.2917"
                  stroke="#60679F"
                  stroke-width="1.375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p class="text-sm font-medium uppercase text-custom-4">
                Dimensions
              </p>
            </div>
            <p class="mt-2 text-custom-1">37 x 26 x 7 cm</p>
          </div>
        </div>
      </div>

      <ul class="mt-6 w-10/12 sm:mt-8">
        {#each timeline as t, i}
          <li class={clsx(i === timeline.length + 1 && 'mb-5')}>
            <div class={clsx(i !== timeline.length - 1 && 'pb-5', 'relative')}>
              <span
                class="absolute top-5 left-2.5 -ml-[0.5px] h-full w-px bg-custom-4"
                aria-hidden="true"
              />
              <div class="relative flex items-start space-x-3">
                <div
                  class={clsx(
                    i === 0 ? 'border-4' : 'border',
                    'flex h-5 w-5 items-center justify-center rounded-full border-4 border-custom-4 bg-white',
                  )}
                />
                <div class="min-w-0 flex-1">
                  <h3 class="text-custom-1">
                    {t.text}
                  </h3>
                  <p class="mt-2 text-xs text-custom-4">
                    {t.time}
                  </p>
                </div>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #10153e;
    --color-2: #e3e5f1;
    --color-3: #f7f7fa;
    --color-4: #60679f;
  }
</style>
