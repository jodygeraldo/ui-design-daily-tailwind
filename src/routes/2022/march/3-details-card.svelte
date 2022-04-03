<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Details Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="rounded-lg md:rounded-2xl xl:rounded-[32px] bg-white xl:p-16 shadow-[0_24px_34px_0_#00278a10] relative text-primary max-w-lg mx-auto p-6 sm:p-8 md:p-10 lg:p-12"
    >
      <Icon
        id="cross-2"
        class="w-7 h-7 absolute top-4 right-4 sm:top-8 sm:right-8"
      />

      <div class="space-y-6">
        <div class="space-y-4 w-4/5">
          <h2 class="font-bold text-2xl">Partial payment</h2>
          <p class="font-medium text-lg">
            Partial payment with Consumer Bank AS or pay 53 995.- now
          </p>
        </div>

        <div class="p-4 sm:p-8 space-y-6 bg-[#f5f9ff] rounded-xl">
          <div class="space-y-2">
            <label for="select-1" class="font-medium text-sm"
              >Select monthly amount and repayment period</label
            >
            <div class="flex">
              <select
                name="select-1"
                id="select-1"
                class="form-select w-0 flex-1 truncate text-lg font-medium rounded-lg border border-ascent text-black p-2 sm:p-4 pr-10"
              >
                <option value="1">9 311.-/month for 6 months</option>
              </select>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex justify-between w-11/12 font-medium">
              <h4>Effective interest rate</h4>
              <p>12.43%</p>
            </div>
            <div class="flex justify-between w-11/12 font-medium">
              <h4>Cost</h4>
              <p>1 870.-</p>
            </div>
            <div class="flex justify-between w-11/12 font-medium">
              <h4>In total</h4>
              <p>55 865.-</p>
            </div>
          </div>

          <p class="font-medium text-sm w-11/12">
            Partial payment from Santander Consumer Bank AS presupposes the
            conclusion of a credit agreement with a credit card after credit
            assessment.
          </p>
        </div>

        <button
          class="border border-ascent text-black rounded-lg p-2 sm:p-4 w-full font-medium sm:text-lg"
          >Back to the product</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #0b2055;
    --color-ascent: #5884c6;
  }
</style>
