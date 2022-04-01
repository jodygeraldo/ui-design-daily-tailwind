<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Share Document - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="mx-auto max-w-3xl space-y-[39px] rounded-3xl bg-white p-4 shadow-2xl md:p-8 2xl:p-14"
    >
      <h2 class="text-[32px] font-medium">Share Document</h2>

      <div
        class="flex items-center justify-between gap-4 rounded-2xl bg-[#E8F5F3] p-4 md:p-8 2xl:p-14"
      >
        <input
          type="text"
          value="https://drive.com/file/d/1V_5zPJDskasjkIIIlysNFXGhtlZ7EI2EcHLF/view?"
          class="w-0 flex-1 truncate rounded-lg border border-[#BDE5C8] bg-white p-6 font-medium text-primary"
        />
        <button class="rounded-lg bg-ascent p-6 text-white">Copy Link</button>
      </div>

      <h3 class="text-2xl font-medium text-primary">Permission</h3>

      <div class="space-y-2 text-primary">
        <div class="flex items-center gap-2">
          <Icon id="link-break-1" className="h-6 w-6" />
          <p class="text-lg font-medium">Restricted</p>
          <Icon id="chevron-down" className="h-4 w-4" />
        </div>
        <p class="font-medium opacity-70">
          Only people you add can open this link
        </p>
      </div>

      <p class="font-medium text-ascent underline underline-offset-1">
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
