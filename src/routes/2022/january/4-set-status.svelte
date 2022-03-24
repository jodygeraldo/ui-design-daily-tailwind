<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<div
  class="theme bg-low-contrast grid lg:grid-cols-2 place-items-center place-content-center h-screen"
>
  <div
    class="w-[548px] h-[260px] bg-white p-8 rounded-2xl flex justify-between flex-col shadow-lg col-span-1"
  >
    <h2 class="font-bold text-[24px] text-high-contrast">Add colleagues</h2>
    <input
      type="text"
      placeholder="Enter name, email or tag"
      class="p-[10px] rounded-lg border border-[#dadcf5] bg-[#f8f8ff] placeholder:text-high-contrast text-lg w-full placeholder:font-medium"
    />

    <div class="space-x-[11px] flex justify-end">
      <button
        class="p-[10px] border-[#dadcf5] border rounded-lg text-high-contrast text-lg font-medium"
        >Cancel</button
      >
      <button
        class="p-[10px] bg-primary rounded-lg text-white text-lg font-medium"
        >Add</button
      >
    </div>
  </div>
  <div class="col-span-1 mt-20 lg:mt-0">
    <button
      class="rounded-lg text-high-contrast border border-primary p-[10px] inline-flex gap-3 font-medium"
    >
      <span class="text-lg">In a call</span>
      <Icon id="chevron-down" className="w-6 h-6 text-high-contrast" />
    </button>
    <div class="mt-2 bg-white p-8 divide-y divide-[#DADCF5] rounded-lg">
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
          <p class="text-lg text-high-contrast font-medium">Appear offline</p>
        </li>
      </ul>
      <p
        class="flex items-center gap-2 py-4 text-lg text-high-contrast font-medium"
      >
        <Icon id="clcok" className="w-6 h-6 text-high-contrast" />
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

<style>
  .theme {
    --color-primary: #7758ce;
    --color-ascent: #5ac1d8;
    --text-color-high: #161842;
    --text-color-low: #838faa;
  }
</style>
