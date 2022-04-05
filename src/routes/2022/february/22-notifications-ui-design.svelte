<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Notifications - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 text-custom-1 sm:px-6 lg:px-8">
    <div class="mx-auto flex max-w-2xl flex-col items-end gap-4">
      <button class="rounded-full bg-custom-1 p-4">
        <Icon id="bell" class="h-8 w-8 text-white" />
      </button>

      <div
        class="relative rounded-2xl bg-white p-10 shadow-[0_10px_24px_0_#09115910]"
      >
        <div
          class="absolute -top-[36%] bottom-[50%] -left-[27%] right-[55%] -z-10 hidden rounded-[50px] bg-[#E9EBFF] lg:block"
        />
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold">You have 1 new message</h2>
          <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <div class="max-w-fit rounded-lg bg-[#FFE9F2] p-4 ">
              <Icon id="envelope-closed" class="h-8 w-8 text-[#C83974]" />
            </div>
            <div class="mx-auto w-4/5 text-center  sm:w-full sm:text-left">
              <p class="font-semibold">Feb 22</p>
              <p class="text-lg">
                If you like what we do, please tell your friends and share.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div
              class="hidden h-8 w-8 shrink-0 rounded-lg bg-transparent p-8 sm:block"
            />
            <div class="flex flex-wrap items-center gap-4">
              <button
                class="flex items-center gap-2 rounded-full border border-[#158ABB] py-2 px-4"
              >
                <Icon id="twitter-logo" class="h-8 w-8 text-[#158ABB]" />
                <span class="font-semibold text-[#158ABB]">Twitter</span>
              </button>
              <button
                class="flex items-center gap-2 rounded-full border border-[#8a3ab9] py-2 px-4"
              >
                <Icon id="instagram-logo" class="h-8 w-8 text-[#8a3ab9]" />
                <span class="font-semibold text-[#8a3ab9]">Instagram</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #0c0e41;
  }
</style>
