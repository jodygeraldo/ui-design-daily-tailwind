<script>
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Search Results - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md space-y-2">
      <div class="flex items-center rounded-2xl">
        <div class="flex flex-1">
          <div class="relative flex-1">
            <input
              type="text"
              placeholder="Apple"
              class="w-full rounded-l-2xl border-none p-[18px] pr-28 focus:outline-none focus:ring-0"
            />
            <div class="absolute inset-y-2 right-2">
              <select
                class="rounded border border-[#E2E7FB] bg-[#F6F8FF] text-primary"
              >
                <option value="EN">EN</option>
                <option value="ID">ID</option>
              </select>
            </div>
          </div>
        </div>
        <button class="rounded-r-2xl bg-primary p-4">
          <Icon id="magnifying-glass" className="w-7 h-7 text-white" />
        </button>
      </div>

      <div class="flex">
        <div
          class="flex-1 rounded-lg bg-white p-4 shadow-[0_24px_44px_0_#c7d0f060]"
        >
          <div
            class="flex flex-col gap-4 bg-[#F6F8FF] p-6 sm:flex-row sm:items-center"
          >
            <img
              src="/assets/images/item-1.png"
              class="h-[72px] w-[72px] rounded-2xl"
              alt=""
            />
            <div class="text-primary">
              <h3 class="font-semibold">Apple</h3>
              <p class="text-sm">Fruit and tree</p>
            </div>
          </div>
          <div class="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
            <img
              src="/assets/images/item-2.png"
              class="h-[72px] w-[72px] rounded-2xl"
              alt=""
            />
            <div class="text-primary">
              <h3 class="font-semibold">Apple Inc.</h3>
              <p class="text-sm">American multinational</p>
            </div>
          </div>
          <div class="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
            <img
              src="/assets/images/item-3.png"
              class="h-[72px] w-[72px] rounded-2xl"
              alt=""
            />
            <div class="text-primary">
              <h3 class="font-semibold">Apple TV</h3>
              <p class="text-sm">Home media receiver</p>
            </div>
          </div>
          <div class="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
            <img
              src="/assets/images/item-4.png"
              class="h-[72px] w-[72px] rounded-2xl"
              alt=""
            />
            <div class="text-primary">
              <h3 class="font-semibold">Apple Silicon</h3>
              <p class="text-sm">Processors designed by Apple</p>
            </div>
          </div>
        </div>
        <div class="w-7 bg-transparent px-8" />
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #2c3e50;
  }
</style>
