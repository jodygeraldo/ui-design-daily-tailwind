<script>
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Set Status - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-20 lg:grid-cols-2">
      <div
        class="col-span-1 space-y-6 self-start rounded-2xl bg-white p-8 shadow-lg"
      >
        <h2 class="text-2xl font-bold text-high-contrast">Add colleagues</h2>
        <input
          type="text"
          placeholder="Enter name, email or tag"
          class="w-full rounded-lg border border-ascent bg-[#f8f8ff] px-6 py-4 text-lg placeholder:font-medium placeholder:text-high-contrast placeholder:opacity-70"
        />

        <div class="flex justify-end space-x-[11px]">
          <button
            class="rounded-lg border border-ascent px-6 py-4 text-lg font-medium text-high-contrast"
            >Cancel</button
          >
          <button
            class="rounded-lg bg-primary px-6 py-4 text-lg font-medium text-white"
            >Add</button
          >
        </div>
      </div>

      <div class="col-span-1 mx-auto">
        <button
          class="inline-flex gap-3 rounded-lg border border-primary p-[10px] font-medium text-gray-12"
        >
          <span class="text-lg">In a call</span>
          <Icon id="chevron-down" className="w-6 h-6 text-gray-12" />
        </button>

        <div
          class="mt-2 max-w-[240px] divide-y divide-ascent rounded-lg bg-white p-8"
        >
          <ul class="space-y-4">
            <li class="flex items-center gap-2">
              <div class="h-4 w-4 rounded-full bg-[#4AC63F]" />
              <p class="text-lg font-medium text-high-contrast">Available</p>
            </li>
            <li class="flex items-center gap-2">
              <div class="h-4 w-4 rounded-full bg-[#F95555]" />
              <p class="text-lg font-medium text-high-contrast">Busy</p>
            </li>
            <li class="flex items-center gap-2">
              <div class="h-4 w-4 rounded-full bg-[#F9AD55]" />
              <p class="text-lg font-medium text-high-contrast">Appear away</p>
            </li>
            <li class="flex items-center gap-2 pb-4">
              <div class="h-4 w-4 rounded-full bg-[#9B9BC3]" />
              <p class="text-lg font-medium text-high-contrast">
                Appear offline
              </p>
            </li>
          </ul>
          <p
            class="flex items-center gap-2 py-4 text-lg font-medium text-high-contrast"
          >
            <Icon id="clock" className="w-6 h-6 text-high-contrast" />
            <span>Duration</span>
          </p>

          <p
            class="flex items-center gap-2 pt-4 text-lg font-medium text-high-contrast"
          >
            <Icon id="reset" className="w-6 h-6 text-high-contrast" />
            <span>Reset status</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #7758ce;
    --color-ascent: #dadcf5;
    --text-color-high: #161842;
    --text-color-low: #838faa;
  }
</style>
