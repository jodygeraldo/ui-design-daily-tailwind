<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Buy Subscription Section - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="z-10 mx-auto max-w-5xl rounded-2xl bg-custom-7 shadow-[0_47px_57px_-26px_#53539014]"
    >
      <div class="px-6 py-8 lg:px-10 xl:px-12">
        <div class="mx-auto sm:w-4/5">
          <div class="text-center">
            <h2
              class="mx-auto w-4/5 text-2xl font-black text-custom-1 xl:text-3xl"
            >
              Get the most out of your mobile with the right subscription
            </h2>
            <p class="mt-6 font-medium text-custom-1 xl:text-lg">
              All devices come with free delivery or pickup as standard. See
              information on available shopping options for your location.
            </p>
          </div>
        </div>

        <div
          class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          <div class="relative">
            <div
              class="absolute -top-4 -left-4 right-4 bottom-4 -z-10 ml-4 rounded-xl bg-custom-2"
            />

            <div class="col-span-1 ml-4 rounded-xl bg-white p-6 xl:p-8">
              <div>
                <img src="/assets/images/ice.png" alt="" class="h-7" />
                <div class="mt-4">
                  <h3 class="text-lg font-semibold text-custom-1">
                    Ice Mobile 10GB
                  </h3>
                  <p class="text-sm font-medium text-custom-1">
                    Up to 100Mbit/s
                  </p>
                </div>
                <p class="mt-4 text-sm font-medium text-custom-1">
                  <span class="text-xl font-bold xl:text-2xl">299,-</span> /month
                </p>
              </div>

              <button
                class="mt-10 rounded-full bg-custom-5 py-2 px-4 font-medium text-custom-1 shadow-[0_4px_0_0_#e7e7fb] xl:py-4 xl:px-6"
                >Add subscription</button
              >
            </div>
          </div>

          <div class="relative">
            <div
              class="absolute -top-4 -left-4 right-4 bottom-4 -z-10 ml-4 rounded-xl bg-custom-2"
            />

            <div class="col-span-1 ml-4 rounded-xl bg-white p-6 xl:p-8">
              <div>
                <img src="/assets/images/telia.png" alt="" class="h-7" />
                <div class="mt-4">
                  <h3 class="text-lg font-semibold text-custom-1">
                    Ice Mobile 10GB
                  </h3>
                  <p class="text-sm font-medium text-custom-1">
                    Up to 100Mbit/s
                  </p>
                </div>
                <p class="mt-4 text-sm font-medium text-custom-1">
                  <span class="text-xl font-bold xl:text-2xl">299,-</span> /month
                </p>
              </div>

              <button
                class="mt-10 rounded-full bg-custom-5 py-2 px-4 font-medium text-custom-1 shadow-[0_4px_0_0_#e7e7fb] xl:py-4 xl:px-6"
                >Add subscription</button
              >
            </div>
          </div>

          <div class="relative">
            <div
              class="absolute -top-4 -left-4 right-4 bottom-4 -z-10 ml-4 rounded-xl bg-custom-2"
            />

            <div class="col-span-1 ml-4 rounded-xl bg-white p-6 xl:p-8">
              <div>
                <img src="/assets/images/telenor.png" alt="" class="h-7" />
                <div class="mt-4">
                  <h3 class="text-lg font-semibold text-custom-1">
                    Ice Mobile 10GB
                  </h3>
                  <p class="text-sm font-medium text-custom-1">
                    Up to 100Mbit/s
                  </p>
                </div>
                <p class="mt-4 text-sm font-medium text-custom-1">
                  <span class="text-xl font-bold xl:text-2xl">299,-</span> /month
                </p>
              </div>

              <button
                class="mt-10 rounded-full bg-custom-5 py-2 px-4 font-medium text-custom-1 shadow-[0_4px_0_0_#e7e7fb] xl:py-4 xl:px-6"
                >Add subscription</button
              >
            </div>
          </div>
        </div>

        <div class="mt-12 flex justify-center">
          <button
            class="rounded-full bg-custom-1 py-2 px-4 text-white xl:py-4 xl:px-6"
            >See all subscriptions</button
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #171435;
    --color-2: #fffbec;
    --color-3: #f9ecff;
    --color-4: #eceeff;
    --color-5: #f4f5fa;
    --color-6: #f0f0f6;
    --color-7: #f4f5fa;
  }
</style>
