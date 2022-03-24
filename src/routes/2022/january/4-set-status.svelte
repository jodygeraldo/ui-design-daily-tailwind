<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="grid lg:grid-cols-2 gap-20">
      <div
        class="bg-white p-8 rounded-2xl shadow-lg col-span-1 space-y-6 self-start"
      >
        <h2 class="font-bold text-2xl text-high-contrast">Add colleagues</h2>
        <input
          type="text"
          placeholder="Enter name, email or tag"
          class="px-6 py-4 rounded-lg border border-ascent bg-[#f8f8ff] placeholder:text-high-contrast placeholder:opacity-70 text-lg w-full placeholder:font-medium"
        />

        <div class="space-x-[11px] flex justify-end">
          <button
            class="px-6 py-4 border-ascent border rounded-lg text-high-contrast text-lg font-medium"
            >Cancel</button
          >
          <button
            class="px-6 py-4 bg-primary rounded-lg text-white text-lg font-medium"
            >Add</button
          >
        </div>
      </div>
      <div class="col-span-1">
        <button
          class="rounded-lg text-high-contrast border border-primary p-[10px] inline-flex gap-3 font-medium"
        >
          <span class="text-lg">In a call</span>
          <Icon id="chevron-down" className="w-6 h-6 text-high-contrast" />
        </button>
        <div
          class="mt-2 bg-white p-8 divide-y divide-ascent rounded-lg max-w-[240px]"
        >
          <ul class="space-y-4">
            <li class="flex items-center gap-2">
              <div class="rounded-full w-4 h-4 bg-[#4AC63F]" />
              <p class="text-lg text-high-contrast font-medium">Available</p>
            </li>
            <li class="flex items-center gap-2">
              <div class="rounded-full w-4 h-4 bg-[#F95555]" />
              <p class="text-lg text-high-contrast font-medium">Busy</p>
            </li>
            <li class="flex items-center gap-2">
              <div class="rounded-full w-4 h-4 bg-[#F9AD55]" />
              <p class="text-lg text-high-contrast font-medium">Appear away</p>
            </li>
            <li class="flex items-center gap-2 pb-4">
              <div class="rounded-full w-4 h-4 bg-[#9B9BC3]" />
              <p class="text-lg text-high-contrast font-medium">
                Appear offline
              </p>
            </li>
          </ul>
          <p
            class="flex items-center gap-2 py-4 text-lg text-high-contrast font-medium"
          >
            <Icon id="clock" className="w-6 h-6 text-high-contrast" />
            <span>Duration</span>
          </p>

          <p
            class="flex items-center gap-2 pt-4 text-lg text-high-contrast font-medium"
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
