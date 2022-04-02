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

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-lg rounded-3xl bg-white py-8 pr-8 pl-16 shadow-[0_24px_44px_-20px_#c2abe580]"
    >
      <div
        class="absolute inset-y-[20%] -inset-x-[10%] -z-10 hidden rounded-[30px] bg-[#CD8AFF] lg:block"
      />
      <div class="flex justify-between gap-4">
        <h2
          class="self-end pt-10 text-lg font-semibold text-[#38196B] sm:text-2xl"
        >
          Show notifications for
        </h2>
        <div
          class="self-start rounded-full border border-[#F4EDFF] bg-[#F8F4FF] p-3"
        >
          <Icon id="cross-1" className="w-8 h-8 text-[#38196B50]" />
        </div>
      </div>

      <div class="mt-6 flex items-center gap-2">
        <div
          class="rounded-2xl bg-gradient-to-br from-[#9AB0FF] to-[#EB73FF] p-3"
        >
          <Icon id="bell" className="w-8 h-8 text-white" />
        </div>
        <p class="text-lg text-black">www.website.com</p>
      </div>

      <div class="mt-3 flex items-center gap-4 sm:justify-end">
        <button
          class="rounded-lg border border-[#FFB2B2] py-3 px-6 text-[#FF1212]"
          >Block</button
        >
        <button
          class="rounded-lg border border-[#9EEBAF] py-3 px-6 text-[#0ABE31]"
          >Allow</button
        >
      </div>
    </div>
  </div>
</div>
