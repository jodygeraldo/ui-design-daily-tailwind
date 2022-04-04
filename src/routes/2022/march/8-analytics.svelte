<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Analytics - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-5xl rounded-[60px] bg-[#F6F9FF] p-16 text-primary"
    >
      <div
        class="absolute top-0 left-4 -right-4 -bottom-4 -z-10 rounded-[60px] bg-[#E5EDFF]"
      />

      <div class="space-y-14">
        <div>
          <h2 class="text-3xl font-black">Traffic source types</h2>
          <p class="mt-2 text-lg font-medium">Views · Last 28 days</p>
        </div>

        <div class="gap-20 lg:flex">
          <div
            class="relative mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-white"
          >
            <!-- TODO: IDK MAN -->
            <p class="z-10 text-lg font-medium">Traffic sources</p>
          </div>

          <div class="mt-8 flex-1 lg:mt-0">
            <div class="space-y-4">
              <div class="grid grid-cols-2">
                <p class="col-span-1 text-lg font-medium">Channel pages</p>
                <div class="grid grid-cols-5 items-center gap-2">
                  <div
                    class="col-span-4 h-1.5 w-full justify-self-end rounded-full bg-[#6792FF]"
                  />
                  <p class="col-span-1 text-lg font-bold">30.5%</p>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <p class="col-span-1 text-lg font-medium">Direct or unknown</p>
                <div class="grid grid-cols-5 items-center gap-2">
                  <div
                    class="col-span-4 h-1.5 w-4/5 justify-self-end rounded-full bg-[#4473EA]"
                  />
                  <p class="col-span-1 text-lg font-bold">33.6%</p>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <p class="col-span-1 text-lg font-medium">Search</p>
                <div class="grid grid-cols-5 items-center gap-2">
                  <div
                    class="col-span-4 h-1.5 w-[55%] justify-self-end rounded-full bg-[#1A52E1]"
                  />
                  <p class="col-span-1 text-lg font-bold">11%</p>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <p class="col-span-1 text-lg font-medium">External</p>
                <div class="grid grid-cols-5 items-center gap-2">
                  <div
                    class="col-span-4 h-1.5 w-1/6 justify-self-end rounded-full bg-[#96B3FF]"
                  />
                  <p class="col-span-1 text-lg font-bold">6%</p>
                </div>
              </div>
            </div>

            <div class="mt-7 text-right">
              <a
                href="#see-more"
                class="text-lg font-medium text-[#1A52E1] underline underline-offset-1"
                >See more</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #12163c;
  }
</style>
