<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>Share Document - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="rounded-3xl shadow-2xl space-y-[39px] p-4 md:p-8 2xl:p-14 bg-white max-w-3xl mx-auto"
    >
      <h2 class="font-medium text-[32px]">Share Document</h2>

      <div
        class="p-4 md:p-8 2xl:p-14 rounded-2xl flex justify-between bg-[#E8F5F3] gap-4 items-center"
      >
        <input
          type="text"
          value="https://drive.com/file/d/1V_5zPJDskasjkIIIlysNFXGhtlZ7EI2EcHLF/view?"
          class="w-0 flex-1 truncate border border-[#BDE5C8] rounded-lg bg-white text-primary font-medium p-6"
        />
        <button class="rounded-lg p-6 bg-ascent text-white">Copy Link</button>
      </div>

      <h3 class="font-medium text-2xl text-primary">Permission</h3>

      <div class="text-primary space-y-2">
        <div class="flex gap-2 items-center">
          <Icon id="link-break-1" className="h-6 w-6" />
          <p class="font-medium text-lg">Restricted</p>
          <Icon id="chevron-down" className="h-4 w-4" />
        </div>
        <p class="opacity-70 font-medium">
          Only people you add can open this link
        </p>
      </div>

      <p class="underline text-ascent font-medium underline-offset-1">
        Send feedback
      </p>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #132a46;
    --color-ascent: #4e7d75;
  }
</style>
