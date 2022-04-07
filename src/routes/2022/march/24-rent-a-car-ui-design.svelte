<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Rent A Car UI Design - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="mx-auto max-w-2xl rounded-3xl bg-white px-4 py-6 text-custom-1 shadow-[0_44px_64px_0_#4519a010] sm:py-8 sm:px-6 md:px-8 lg:p-10 xl:p-12"
    >
      <h2 class="text-2xl font-bold sm:text-3xl">Search for a rental car</h2>

      <div class="mt-6 sm:mt-8">
        <div>
          <label for="input1" class="text-sm font-bold">Pick up location</label>
          <input
            type="text"
            name="input1"
            placeholder="City, airport, region, district..."
            class="mt-2 w-full rounded border border-custom-3 p-4 placeholder:font-bold placeholder:text-custom-1 sm:placeholder:text-lg"
          />

          <div class="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              name="input2"
              class="form-checkbox h-6 w-6 rounded border border-custom-3 text-custom-1"
            />
            <label for="input2" class="text-lg font-bold"
              >Deliver the car somewhere else</label
            >
          </div>
        </div>
      </div>

      <div class="mt-4 gap-4 sm:flex">
        <div>
          <label for="input3" class="text-sm font-bold">Date of pickup</label>
          <div>
            <div class="relative">
              <Icon
                id="calendar"
                class="absolute left-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
              />
              <input
                type="text"
                placeholder="Sat 26 Mar 2022"
                class="mt-2 w-full truncate rounded border border-custom-3 p-4 px-12 placeholder:font-bold placeholder:text-custom-1 sm:placeholder:text-lg"
              />
              <Icon
                id="chevron-down"
                class="absolute right-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
              />
            </div>

            <div class="sm:flex">
              <div class="relative flex-1">
                <Icon
                  id="calendar"
                  class="absolute left-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
                />
                <input
                  type="text"
                  placeholder="10"
                  class="mt-2 w-full rounded border border-custom-3 p-4 px-12 placeholder:font-bold placeholder:text-custom-1 sm:rounded-r-none sm:placeholder:text-lg"
                />
                <Icon
                  id="chevron-down"
                  class="absolute right-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
                />
              </div>
              <div class="relative flex-1">
                <input
                  type="text"
                  placeholder="00"
                  class="mt-2 w-full rounded border border-custom-3 p-4 pr-12 placeholder:font-bold placeholder:text-custom-1 sm:rounded-l-none sm:placeholder:text-lg"
                />
                <Icon
                  id="chevron-down"
                  class="absolute right-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 sm:mt-0">
          <label for="input3" class="text-sm font-bold">Date of delivery</label>
          <div>
            <div class="relative">
              <Icon
                id="calendar"
                class="absolute left-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
              />
              <input
                type="text"
                placeholder="Tue 29 Mar 2022"
                class="mt-2 w-full truncate rounded border border-custom-3 p-4 px-12 placeholder:font-bold placeholder:text-custom-1 sm:placeholder:text-lg"
              />
              <Icon
                id="chevron-down"
                class="absolute right-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
              />
            </div>

            <div class="sm:flex">
              <div class="relative flex-1">
                <Icon
                  id="calendar"
                  class="absolute left-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
                />
                <input
                  type="text"
                  placeholder="10"
                  class="mt-2 w-full rounded border border-custom-3 p-4 px-12 placeholder:font-bold placeholder:text-custom-1 sm:rounded-r-none sm:placeholder:text-lg"
                />
                <Icon
                  id="chevron-down"
                  class="absolute right-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
                />
              </div>
              <div class="relative flex-1">
                <input
                  type="text"
                  placeholder="00"
                  class="mt-2 w-full rounded border border-custom-3 p-4 pr-12 placeholder:font-bold placeholder:text-custom-1 sm:rounded-l-none sm:placeholder:text-lg"
                />
                <Icon
                  id="chevron-down"
                  class="absolute right-4 top-1/2 bottom-1/2 h-7 w-7 -translate-y-[40%] text-custom-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center gap-2 sm:mt-8">
        <input
          type="checkbox"
          name="input2"
          checked
          class="form-checkbox h-7 w-7 rounded border border-custom-3 text-custom-1"
        />
        <label for="input2" class="text-lg font-bold"
          >The driver’s age between 30 and 65?</label
        >
        <button>
          <Icon id="info-circled" class="h-6 w-6 text-custom-1" />
        </button>
      </div>

      <div class="mt-6 space-y-4 sm:mt-8">
        <div class="flex items-center gap-2">
          <Icon id="check" class="h-6 w-6 text-custom-1" />
          <p class="font-bold sm:text-lg">No credit card fees</p>
        </div>

        <div class="flex items-center gap-2">
          <Icon id="check" class="h-6 w-6 text-custom-1" />
          <p class="font-bold sm:text-lg">No change fees</p>
        </div>

        <div class="flex items-center gap-2">
          <Icon id="check" class="h-6 w-6 text-custom-1" />
          <p class="font-bold sm:text-lg">Price match guarantee</p>
        </div>
      </div>

      <button
        class="mt-6 w-full rounded-3xl bg-custom-2 p-4 text-lg font-bold text-white sm:mt-8 sm:p-6 sm:text-2xl md:p-8"
        >Search</button
      >
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #0d1c52;
    --color-2: #fe6f4f;
    --color-3: #8f9dce;
    --color-4: #fcc863;
    --color-5: #fc9a63;
  }
</style>
