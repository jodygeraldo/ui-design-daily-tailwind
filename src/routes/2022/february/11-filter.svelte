<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>Filter - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-20">
      <div class="col-span-1 max-w-md mx-auto">
        <div class="flex items-center gap-3">
          <button
            class="border-[6px] border-ascent rounded-full bg-white flex items-center p-4"
          >
            <div class="mr-2 w-[10px] h-[10px] bg-[#1e78ff] rounded-sm" />
            <span class="mr-1 text-primary">Artwork</span>
            <Icon id="chevron-down" className="w-5 h-5 text-primary" />
          </button>

          <button
            class="border-[6px] border-ascent rounded-full bg-white flex items-center p-4"
          >
            <span class="mr-1 text-primary">All</span>
            <Icon id="chevron-down" className="w-5 h-5 text-primary" />
          </button>

          <button
            class="border-[6px] border-ascent rounded-full bg-white flex items-center p-4"
          >
            <span class="mr-1 text-primary">All tags</span>
            <Icon id="chevron-down" className="w-5 h-5 text-primary" />
          </button>
        </div>

        <div
          class="rounded-2xl p-8 space-y-6 bg-white mt-2 shadow-[0_35px_29px_-21px_#eaafe628] relative"
        >
          <div
            class="hidden xl:block absolute top-[40%] -bottom-[30%] -right-[30%] left-[60%] bg-[#f8c6f460] -z-10 rounded-2xl"
          />
          <div class="border-b border-primary/10 w-3/4 flex items-center pb-4">
            <Icon id="magnifying-glass" className="w-8 h-8 text-primary" />
            <input
              type="search"
              placeholder="Search"
              class="placeholder-primary border-none w-full"
            />
          </div>

          <div class="space-y-4">
            <h3 class="uppercase pl-4 font-semibold text-xs">All Categories</h3>

            <div class="flex gap-7">
              <div class="space-y-2">
                <div class="flex gap-2 items-center py-2 px-4">
                  <div
                    class="w-[10px] h-[10px] bg-[#1e78ff] rounded-sm shadow-[0_5px_7px_-2px_#3a79f670]"
                  />
                  <span class="text-primary">Artwork</span>
                </div>
                <div class="flex gap-2 items-center py-2 px-4">
                  <div
                    class="w-[10px] h-[10px] bg-[#EC3FA2] rounded-sm shadow-[0_5px_7px_-2px_#EC3FA270]"
                  />
                  <span class="text-primary">Support</span>
                </div>
                <div class="flex gap-2 items-center py-2 px-4">
                  <div
                    class="w-[10px] h-[10px] bg-[#58C6BC] rounded-sm shadow-[0_5px_7px_-2px_#58C6BC70]"
                  />
                  <span class="text-primary">Coding</span>
                </div>
                <div class="flex gap-2 items-center py-2 px-4">
                  <div
                    class="w-[10px] h-[10px] bg-[#58C53A] rounded-sm shadow-[0_5px_7px_-2px_#58C53A70]"
                  />
                  <span class="text-primary">Contests</span>
                </div>
              </div>

              <div class="space-y-2">
                <div class="flex gap-2 items-center py-2 px-4">
                  <div
                    class="w-[10px] h-[10px] bg-[#B6E148] rounded-sm shadow-[0_5px_7px_-2px_#B6E14870]"
                  />
                  <span class="text-primary">Game Engine</span>
                </div>
                <div class="flex gap-2 items-center py-2 px-4">
                  <div
                    class="w-[10px] h-[10px] bg-[#F7C844] rounded-sm shadow-[0_5px_7px_-2px_#F7C84470]"
                  />
                  <span class="text-primary">Jobs</span>
                </div>
                <div class="flex gap-2 items-center py-2 px-4">
                  <div
                    class="w-[10px] h-[10px] bg-[#EE732E] rounded-sm shadow-[0_5px_7px_-2px_#EE732E70]"
                  />
                  <span class="text-primary">General Forums</span>
                </div>
                <div class="flex gap-2 items-center py-2 px-4">
                  <div
                    class="w-[10px] h-[10px] bg-[#EB3323] rounded-sm shadow-[0_5px_7px_-2px_#EB332370]"
                  />
                  <span class="text-primary">Promotions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center col-span-1">
        <div class="rounded-full p-2 gap-4 bg-ascent inline-flex">
          <button class="text-primary bg-white rounded-full px-4 py-2"
            >Latest</button
          >
          <button class="bg-primary text-white rounded-full px-4 py-2"
            >Categories</button
          >
          <button class="text-primary bg-white rounded-full px-4 py-2"
            >Top</button
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #0b0a33;
    --color-ascent: #eaafe6;
  }
</style>
