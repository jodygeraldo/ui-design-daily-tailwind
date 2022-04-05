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

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-lg rounded-lg bg-white p-6 text-custom-1 shadow-[0_24px_34px_0_#00278a10] sm:p-8 md:rounded-2xl md:p-10 lg:p-12 xl:rounded-[32px] xl:p-16"
    >
      <Icon
        id="cross-2"
        class="absolute top-4 right-4 h-7 w-7 sm:top-8 sm:right-8"
      />

      <div class="space-y-6">
        <div class="w-4/5 space-y-4">
          <h2 class="text-2xl font-bold">Partial payment</h2>
          <p class="text-lg font-medium">
            Partial payment with Consumer Bank AS or pay 53 995.- now
          </p>
        </div>

        <div class="space-y-6 rounded-xl bg-[#f5f9ff] p-4 sm:p-8">
          <div class="space-y-2">
            <label for="select-1" class="text-sm font-medium"
              >Select monthly amount and repayment period</label
            >
            <div class="flex">
              <select
                name="select-1"
                id="select-1"
                class="form-select w-0 flex-1 truncate rounded-lg border border-custom-2 p-2 pr-10 text-lg font-medium text-black sm:p-4"
              >
                <option value="1">9 311.-/month for 6 months</option>
              </select>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex w-11/12 justify-between font-medium">
              <h4>Effective interest rate</h4>
              <p>12.43%</p>
            </div>
            <div class="flex w-11/12 justify-between font-medium">
              <h4>Cost</h4>
              <p>1 870.-</p>
            </div>
            <div class="flex w-11/12 justify-between font-medium">
              <h4>In total</h4>
              <p>55 865.-</p>
            </div>
          </div>

          <p class="w-11/12 text-sm font-medium">
            Partial payment from Santander Consumer Bank AS presupposes the
            conclusion of a credit agreement with a credit card after credit
            assessment.
          </p>
        </div>

        <button
          class="w-full rounded-lg border border-custom-2 p-2 font-medium text-black sm:p-4 sm:text-lg"
          >Back to the product</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #0b2055;
    --color-2: #5884c6;
  }
</style>
