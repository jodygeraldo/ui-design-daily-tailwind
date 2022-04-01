<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  const checkboxes = [
    { text: 'Industry', checked: true },
    { text: 'Website URL', checked: true },
    { text: 'Company size', checked: true },
    { text: 'Description', checked: false },
    { text: 'Logo', checked: false },
    { text: 'Location', checked: true },
    { text: 'Custom button', checked: false },
  ]
</script>

<svelte:head>
  <title>Progress - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
      <div
        class="col-span-1 mx-auto max-w-xl space-y-12 rounded-2xl bg-ascent p-6 sm:p-10 md:p-14"
      >
        <div class="space-y-4">
          <h2 class="text-2xl font-black text-tertiary">Build your page</h2>
          <p class="text-lg font-semibold text-tertiary">
            Complete actions to unlock new features along the way. On average,
            completed pages get 30% more traffic.
          </p>
        </div>

        <div class="space-y-4">
          <div class="flex gap-2">
            <div class="h-2 w-0 flex-1 rounded-full bg-primary sm:h-3" />
            <div class="h-2 w-0 flex-1 rounded-full bg-[#4A87FA] sm:h-3" />
            <div class="h-2 w-0 flex-1 rounded-full bg-[#4AA2F7] sm:h-3" />
            <div class="h-2 w-0 flex-1 rounded-full bg-[#4ABEF3] sm:h-3" />
            <div class="h-2 w-0 flex-1 rounded-full bg-[#4AD9EF] sm:h-3" />
            <div class="h-2 w-0 flex-1 rounded-full bg-[#4DD9D2] sm:h-3" />
            <div class="h-2 w-0 flex-1 rounded-full bg-[#11152F] sm:h-3" />
            <div class="h-2 w-0 flex-1 rounded-full bg-[#11152F] sm:h-3" />
            <div class="h-2 w-0 flex-1 rounded-full bg-[#11152F] sm:h-3" />
          </div>
          <p class="text-sm font-semibold text-tertiary">
            3 remaining to complete
          </p>
        </div>
      </div>

      <div
        class="relative col-span-1 mx-auto max-w-xs space-y-8 rounded-2xl bg-ascent p-5 md:p-8 lg:p-10"
      >
        <div
          class="absolute -top-8 -left-8 right-4 bottom-1/2 -z-10 rounded-2xl bg-[#4AA2F7]"
        />
        <h2 class="text-lg font-black text-tertiary">Checklist</h2>
        <div class="space-y-6">
          {#each checkboxes as checkbox}
            <div class="flex items-center gap-3">
              <input
                type="checkbox"
                class="form-checkbox h-7 w-7 rounded-full border border-tertiary bg-ascent checked:bg-primary"
                checked={checkbox.checked}
              />
              <p class="text-lg font-semibold text-tertiary">{checkbox.text}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #4962ff;
    --color-ascent: #1b2042;
    --color-tertiary: #c0c7f7;
  }
</style>
