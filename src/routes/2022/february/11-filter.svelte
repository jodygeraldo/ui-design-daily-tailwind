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
  <title>Filter - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-20 xl:grid-cols-2">
      <div class="col-span-1 mx-auto max-w-md">
        <div class="flex items-center gap-3">
          <button
            class="flex items-center rounded-full border-[6px] border-custom-2 bg-white p-4"
          >
            <div class="mr-2 h-[10px] w-[10px] rounded-sm bg-[#1e78ff]" />
            <span class="mr-1 text-custom-1">Artwork</span>
            <Icon id="chevron-down" class="h-5 w-5 text-custom-1" />
          </button>

          <button
            class="flex items-center rounded-full border-[6px] border-custom-2 bg-white p-4"
          >
            <span class="mr-1 text-custom-1">All</span>
            <Icon id="chevron-down" class="h-5 w-5 text-custom-1" />
          </button>

          <button
            class="flex items-center rounded-full border-[6px] border-custom-2 bg-white p-4"
          >
            <span class="mr-1 text-custom-1">All tags</span>
            <Icon id="chevron-down" class="h-5 w-5 text-custom-1" />
          </button>
        </div>

        <div
          class="relative mt-2 rounded-2xl bg-white p-8 shadow-[0_35px_29px_-21px_#eaafe628]"
        >
          <div
            class="absolute top-[40%] -bottom-[30%] -right-[30%] left-[60%] -z-10 hidden rounded-2xl bg-[#f8c6f460] xl:block"
          />
          <div class="space-y-6">
            <div
              class="border-custom-1/10 flex w-3/4 items-center border-b pb-4"
            >
              <Icon id="magnifying-glass" class="h-8 w-8 text-custom-1" />
              <input
                type="search"
                placeholder="Search"
                class="w-full border-none placeholder-custom-1"
              />
            </div>

            <div class="space-y-4">
              <h3 class="pl-4 text-xs font-semibold uppercase">
                All Categories
              </h3>

              <div class="flex gap-7">
                <div class="space-y-2">
                  <div class="flex items-center gap-2 py-2 px-4">
                    <div
                      class="h-[10px] w-[10px] rounded-sm bg-[#1e78ff] shadow-[0_5px_7px_-2px_#3a79f670]"
                    />
                    <span class="text-custom-1">Artwork</span>
                  </div>
                  <div class="flex items-center gap-2 py-2 px-4">
                    <div
                      class="h-[10px] w-[10px] rounded-sm bg-[#EC3FA2] shadow-[0_5px_7px_-2px_#EC3FA270]"
                    />
                    <span class="text-custom-1">Support</span>
                  </div>
                  <div class="flex items-center gap-2 py-2 px-4">
                    <div
                      class="h-[10px] w-[10px] rounded-sm bg-[#58C6BC] shadow-[0_5px_7px_-2px_#58C6BC70]"
                    />
                    <span class="text-custom-1">Coding</span>
                  </div>
                  <div class="flex items-center gap-2 py-2 px-4">
                    <div
                      class="h-[10px] w-[10px] rounded-sm bg-[#58C53A] shadow-[0_5px_7px_-2px_#58C53A70]"
                    />
                    <span class="text-custom-1">Contests</span>
                  </div>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center gap-2 py-2 px-4">
                    <div
                      class="h-[10px] w-[10px] rounded-sm bg-[#B6E148] shadow-[0_5px_7px_-2px_#B6E14870]"
                    />
                    <span class="text-custom-1">Game Engine</span>
                  </div>
                  <div class="flex items-center gap-2 py-2 px-4">
                    <div
                      class="h-[10px] w-[10px] rounded-sm bg-[#F7C844] shadow-[0_5px_7px_-2px_#F7C84470]"
                    />
                    <span class="text-custom-1">Jobs</span>
                  </div>
                  <div class="flex items-center gap-2 py-2 px-4">
                    <div
                      class="h-[10px] w-[10px] rounded-sm bg-[#EE732E] shadow-[0_5px_7px_-2px_#EE732E70]"
                    />
                    <span class="text-custom-1">General Forums</span>
                  </div>
                  <div class="flex items-center gap-2 py-2 px-4">
                    <div
                      class="h-[10px] w-[10px] rounded-sm bg-[#EB3323] shadow-[0_5px_7px_-2px_#EB332370]"
                    />
                    <span class="text-custom-1">Promotions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 flex items-center justify-center">
        <div class="inline-flex gap-4 rounded-full bg-custom-2 p-2">
          <button class="rounded-full bg-white px-4 py-2 text-custom-1"
            >Latest</button
          >
          <button class="rounded-full bg-custom-1 px-4 py-2 text-white"
            >Categories</button
          >
          <button class="rounded-full bg-white px-4 py-2 text-custom-1"
            >Top</button
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #0b0a33;
    --color-2: #eaafe6;
  }
</style>
