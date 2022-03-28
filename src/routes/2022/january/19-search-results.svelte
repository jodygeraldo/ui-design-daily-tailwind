<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>Search Results - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div class="space-y-2 max-w-md mx-auto">
      <div class="flex items-center bg-white rounded-2xl">
        <div class="p-2 flex flex-1">
          <input
            type="text"
            placeholder="Apple"
            class="border-none focus:outline-none focus:ring-0 flex-1 w-4/5 truncate"
          />
          <select class="rounded bg-[#F6F8FF] border border-[#E2E7FB]">
            <option value="EN">EN</option>
          </select>
        </div>
        <button class="bg-primary p-4 rounded-r-2xl">
          <Icon id="magnifying-glass" className="w-7 h-7 text-white" />
        </button>
      </div>

      <div class="flex">
        <div
          class="bg-white p-4 rounded-lg flex-1 shadow-[0_24px_44px_0_#c7d0f060]"
        >
          <div
            class="flex flex-col sm:flex-row gap-4 sm:items-center p-6 bg-[#F6F8FF]"
          >
            <img
              src="/assets/images/item-1.png"
              class="rounded-2xl w-[72px] h-[72px]"
              alt=""
            />
            <div class="text-primary">
              <h3 class="font-semibold">Apple</h3>
              <p class="text-sm">Fruit and tree</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 sm:items-center p-6">
            <img
              src="/assets/images/item-2.png"
              class="rounded-2xl w-[72px] h-[72px]"
              alt=""
            />
            <div class="text-primary">
              <h3 class="font-semibold">Apple Inc.</h3>
              <p class="text-sm">American multinational</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 sm:items-center p-6">
            <img
              src="/assets/images/item-3.png"
              class="rounded-2xl w-[72px] h-[72px]"
              alt=""
            />
            <div class="text-primary">
              <h3 class="font-semibold">Apple TV</h3>
              <p class="text-sm">Home media receiver</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 sm:items-center p-6">
            <img
              src="/assets/images/item-4.png"
              class="rounded-2xl w-[72px] h-[72px]"
              alt=""
            />
            <div class="text-primary">
              <h3 class="font-semibold">Apple Silicon</h3>
              <p class="text-sm">Processors designed by Apple</p>
            </div>
          </div>
        </div>
        <div class="bg-transparent w-7 px-8" />
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #2c3e50;
  }
</style>
