<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Pricing Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="mx-auto max-w-xl space-y-8 rounded-[32px] bg-white p-6 shadow-[0_34px_44px_0_#000b7310] sm:p-8 md:p-10 lg:p-12 xl:p-14"
    >
      <!-- heading -->
      <div class="space-y-2 text-center">
        <h2 class="text-3xl font-black text-custom-1">Try FREE for 4 weeks</h2>
        <p class="font-medium text-custom-1">
          We uncover the facts around the <br />clock, all over the globe.
        </p>
      </div>

      <!-- cards -->
      <div class="space-y-4">
        <!-- card 1 -->
        <div class="rounded-lg border-2 border-custom-2 p-5 sm:p-8">
          <div class="flex items-center gap-6">
            <input
              type="radio"
              name="radio-1"
              class="form-checkbox h-10 w-10 rounded-full text-custom-1"
              checked
            />

            <div class="space-y-1 text-custom-1">
              <h3 class="font-medium uppercase sm:text-lg">Monthly</h3>
              <p class="text-2xl font-medium">4 weeks for free</p>
              <p class="font-medium sm:text-lg">
                Then $3 every month for the first year
              </p>
            </div>
          </div>
        </div>

        <!-- card 2 -->
        <div
          class="rounded-lg border-8 border-custom-3 py-5 pr-5 pl-4 lg:py-8 lg:pr-8 lg:pl-7"
        >
          <div class="flex items-center gap-6">
            <input
              type="radio"
              name="radio-1"
              class="form-checkbox h-10 w-10 rounded-full border-[3px] border-custom-1 text-custom-1"
            />

            <div class="space-y-1 text-custom-1">
              <div
                class="max-w-fit rounded-full bg-custom-2 py-1 px-2 text-sm font-medium text-white sm:px-4 sm:text-lg"
              >
                Best value
              </div>
              <h3 class="font-medium uppercase sm:text-lg">Yearly</h3>
              <p class="text-2xl font-medium">4 weeks for free</p>
              <p class="font-medium sm:text-lg">Then $30 for the first year</p>
            </div>
          </div>
        </div>
      </div>

      <!-- buttons -->
      <div class="mx-auto max-w-xs">
        <button
          class="w-full rounded-full bg-custom-1 p-3 font-medium text-white sm:p-6 sm:text-lg"
          >Continue</button
        >
        <button
          class="mt-4 flex w-full items-center justify-center gap-2 rounded-full border-[3px] border-custom-3 bg-white p-3 font-medium text-custom-1 sm:p-6 sm:text-lg"
        >
          <span>Continue with</span>
          <img
            class="w-16 sm:w-20"
            src="/assets/images/paypal.png"
            alt="paypal"
          />
        </button>
        <a
          href="#link"
          class="mt-8 flex justify-center font-medium text-custom-2 underline underline-offset-1 sm:text-lg"
          >View more offers</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #0c1033;
    --color-2: #2f42ee;
    --color-3: #e9ebf8;
  }
</style>
