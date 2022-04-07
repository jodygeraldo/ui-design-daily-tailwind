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
  <title>Reviews - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-md rounded-3xl bg-custom-7 px-4 py-8 shadow-[0_12px_92px_0_#191b4a10] sm:px-6 md:max-w-lg md:p-6 lg:max-w-xl lg:p-8 xl:max-w-2xl xl:p-12"
    >
      <div
        class="absolute -top-4 -left-4 right-4 bottom-4 -z-10 hidden rounded-3xl bg-white md:block lg:-top-6 lg:-left-6 lg:right-6 lg:bottom-6 2xl:-top-12 2xl:-left-12 2xl:right-12 2xl:bottom-12"
      />

      <div class="space-y-12">
        <div class="justify-between gap-20 sm:flex">
          <h2 class="font-serif text-3xl font-black text-custom-1 xl:text-4xl">
            What others think about the product
          </h2>

          <div
            class="mt-4 flex items-center justify-center rounded-2xl bg-white p-4 sm:mt-0 sm:flex-col"
          >
            <div class="flex items-center gap-2">
              <Icon
                id="star-filled"
                class="h-8 w-8 stroke-custom-2 text-custom-3 xl:h-10 xl:w-10"
              />
              <span class="text-xl font-semibold text-custom-1 2xl:text-2xl"
                >4.8</span
              >
            </div>
            <p
              class="mt-1 ml-1 text-center text-sm font-medium text-custom-1 sm:w-28"
            >
              Average customer rating
            </p>
          </div>
        </div>

        <div>
          <div class="relative">
            <Icon
              id="magnifying-glass"
              class="absolute left-3 top-1/2 bottom-1/2 h-6 w-6 -translate-y-1/2 text-custom-6 xl:left-4"
            />
            <input
              type="search"
              placeholder="Search topics and reviews"
              class="w-full rounded-2xl bg-white p-3 pl-11 placeholder-custom-6 placeholder:font-semibold xl:p-4 xl:pl-12"
            />
          </div>

          <div class="mt-8">
            <h3 class="font-semibold text-custom-1">Review</h3>

            <div class="mt-4">
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                  <p class="font-bold tabular-nums text-custom-1">5</p>
                  <Icon
                    id="star-filled"
                    class="h-5 w-5 stroke-custom-2 text-custom-3"
                  />
                </div>

                <div class="relative h-2 flex-1">
                  <div
                    class="absolute top-0 left-0 h-2 w-full rounded-full border border-custom-4 bg-custom-5"
                  />
                  <div
                    class="absolute top-0 left-0 h-2 w-[76.8%] rounded-full border border-custom-2 bg-custom-3"
                  />
                </div>

                <p class="w-8 font-medium tabular-nums text-custom-1">106</p>
              </div>

              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                  <p class="font-bold tabular-nums text-custom-1">4</p>
                  <Icon
                    id="star-filled"
                    class="h-5 w-5 stroke-custom-2 text-custom-3"
                  />
                </div>

                <div class="relative h-2 flex-1">
                  <div
                    class="absolute top-0 left-0 h-2 w-full rounded-full border border-custom-4 bg-custom-5"
                  />
                  <div
                    class="absolute top-0 left-0 h-2 w-[23.2%] rounded-full border border-custom-2 bg-custom-3"
                  />
                </div>

                <p class="w-8 font-medium tabular-nums text-custom-1">32</p>
              </div>

              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                  <p class="font-bold tabular-nums text-custom-1">3</p>
                  <Icon
                    id="star-filled"
                    class="h-5 w-5 stroke-custom-2 text-custom-3"
                  />
                </div>

                <div class="relative h-2 flex-1">
                  <div
                    class="absolute top-0 left-0 h-2 w-full rounded-full border border-custom-4 bg-custom-5"
                  />
                </div>

                <p class="w-8 font-medium tabular-nums text-custom-1">0</p>
              </div>

              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                  <p class="font-bold tabular-nums text-custom-1">2</p>
                  <Icon
                    id="star-filled"
                    class="h-5 w-5 stroke-custom-2 text-custom-3"
                  />
                </div>

                <div class="relative h-2 flex-1">
                  <div
                    class="absolute top-0 left-0 h-2 w-full rounded-full border border-custom-4 bg-custom-5"
                  />
                </div>

                <p class="w-8 font-medium tabular-nums text-custom-1">0</p>
              </div>

              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1">
                  <p class="font-bold tabular-nums text-custom-1">1</p>
                  <Icon
                    id="star-filled"
                    class="h-5 w-5 stroke-custom-2 text-custom-3"
                  />
                </div>

                <div class="relative h-2 flex-1">
                  <div
                    class="absolute top-0 left-0 h-2 w-full rounded-full border border-custom-4 bg-custom-5"
                  />
                </div>

                <p class="w-8 font-medium tabular-nums text-custom-1">0</p>
              </div>
            </div>
          </div>
        </div>

        <button
          class="rounded-full bg-custom-1 px-4 py-2 text-white xl:px-6 xl:py-4"
          >Write a review</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #191b4a;
    --color-2: #efb153;
    --color-3: #ffd66c;
    --color-4: #c9c9c9;
    --color-5: #eeeeee;
    --color-6: #73749c;
    --color-7: #f8f8f8;
  }
</style>
