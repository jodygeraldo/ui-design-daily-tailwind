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
      class="relative rounded-[60px] bg-[#F6F9FF] p-16 text-primary max-w-5xl mx-auto"
    >
      <div
        class="absolute top-0 left-4 -right-4 -bottom-4 -z-10 rounded-[60px] bg-[#E5EDFF]"
      />

      <div class="space-y-14">
        <div>
          <h2 class="text-3xl font-black">Traffic source types</h2>
          <p class="mt-2 text-lg font-medium">Views · Last 28 days</p>
        </div>

        <div class="lg:flex gap-20">
          <div
            class="h-52 w-52 mx-auto rounded-full bg-white flex justify-center items-center relative"
          >
            <!-- TODO: IDK MAN -->
            <p class="font-medium text-lg z-10">Traffic sources</p>
          </div>

          <div class="flex-1 mt-8 lg:mt-0">
            <div class="space-y-4">
              <div class="grid grid-cols-2">
                <p class="font-medium text-lg col-span-1">Channel pages</p>
                <div class="grid grid-cols-5 items-center gap-2">
                  <div
                    class="h-1.5 w-full bg-[#6792FF] rounded-full col-span-4 justify-self-end"
                  />
                  <p class="font-bold text-lg col-span-1">30.5%</p>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <p class="font-medium text-lg col-span-1">Direct or unknown</p>
                <div class="grid grid-cols-5 items-center gap-2">
                  <div
                    class="h-1.5 w-4/5 bg-[#4473EA] rounded-full col-span-4 justify-self-end"
                  />
                  <p class="font-bold text-lg col-span-1">33.6%</p>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <p class="font-medium text-lg col-span-1">Search</p>
                <div class="grid grid-cols-5 items-center gap-2">
                  <div
                    class="h-1.5 w-[55%] bg-[#1A52E1] rounded-full col-span-4 justify-self-end"
                  />
                  <p class="font-bold text-lg col-span-1">11%</p>
                </div>
              </div>

              <div class="grid grid-cols-2">
                <p class="font-medium text-lg col-span-1">External</p>
                <div class="grid grid-cols-5 items-center gap-2">
                  <div
                    class="h-1.5 w-1/6 bg-[#96B3FF] rounded-full col-span-4 justify-self-end"
                  />
                  <p class="font-bold text-lg col-span-1">6%</p>
                </div>
              </div>
            </div>

            <div class="mt-7 text-right">
              <a
                href="#see-more"
                class="underline underline-offset-1 text-lg font-medium text-[#1A52E1]"
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
