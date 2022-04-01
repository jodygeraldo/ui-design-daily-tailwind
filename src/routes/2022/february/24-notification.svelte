<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Notification - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="max-w-lg mx-auto rounded-3xl shadow-[0_24px_44px_-20px_#c2abe580] bg-white py-8 pr-8 pl-16 relative"
    >
      <div
        class="hidden lg:block absolute inset-y-[20%] -inset-x-[10%] bg-[#CD8AFF] -z-10 rounded-[30px]"
      />
      <div class="flex justify-between gap-4">
        <h2
          class="self-end font-semibold text-lg sm:text-2xl text-[#38196B] pt-10"
        >
          Show notifications for
        </h2>
        <div
          class="border border-[#F4EDFF] bg-[#F8F4FF] p-3 rounded-full self-start"
        >
          <Icon id="cross-1" className="w-8 h-8 text-[#38196B50]" />
        </div>
      </div>

      <div class="flex gap-2 items-center mt-6">
        <div
          class="rounded-2xl p-3 bg-gradient-to-br from-[#9AB0FF] to-[#EB73FF]"
        >
          <Icon id="bell" className="w-8 h-8 text-white" />
        </div>
        <p class="text-lg text-black">www.website.com</p>
      </div>

      <div class="flex sm:justify-end items-center mt-3 gap-4">
        <button
          class="py-3 px-6 rounded-lg border border-[#FFB2B2] text-[#FF1212]"
          >Block</button
        >
        <button
          class="py-3 px-6 rounded-lg border border-[#9EEBAF] text-[#0ABE31]"
          >Allow</button
        >
      </div>
    </div>
  </div>
</div>
