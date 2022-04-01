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

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-primary">
    <div class="flex flex-col items-end gap-4 max-w-2xl mx-auto">
      <button class="rounded-full bg-primary p-4">
        <Icon id="bell" className="w-8 h-8 text-white" />
      </button>

      <div
        class="rounded-2xl p-10 space-y-7 bg-white shadow-[0_10px_24px_0_#09115910] relative"
      >
        <div
          class="hidden lg:block absolute -top-[36%] bottom-[50%] -left-[27%] right-[55%] bg-[#E9EBFF] rounded-[50px] -z-10"
        />
        <div class="space-y-6">
          <h2 class="font-semibold text-2xl">You have 1 new message</h2>
          <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div class="max-w-fit p-4 bg-[#FFE9F2] rounded-lg ">
              <Icon id="envelope-closed" className="w-8 h-8 text-[#C83974]" />
            </div>
            <div class="w-4/5 mx-auto sm:w-full  text-center sm:text-left">
              <p class="font-semibold">Feb 22</p>
              <p class="text-lg">
                If you like what we do, please tell your friends and share.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div
              class="hidden sm:block p-8 bg-transparent rounded-lg w-8 h-8 shrink-0"
            />
            <div class="flex flex-wrap items-center gap-4">
              <button
                class="flex gap-2 items-center rounded-full border border-[#158ABB] py-2 px-4"
              >
                <Icon id="twitter-logo" className="w-8 h-8 text-[#158ABB]" />
                <span class="font-semibold text-[#158ABB]">Twitter</span>
              </button>
              <button
                class="flex gap-2 items-center rounded-full border border-[#8a3ab9] py-2 px-4"
              >
                <Icon id="instagram-logo" className="w-8 h-8 text-[#8a3ab9]" />
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
    --color-primary: #0c0e41;
  }
</style>
