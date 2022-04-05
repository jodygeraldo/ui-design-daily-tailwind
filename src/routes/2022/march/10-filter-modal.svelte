<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Filter Modal - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-md rounded-[32px] bg-[#322e59] px-8 pt-8 pb-12 text-custom-1"
    >
      <div
        class="absolute bottom-8 right-4 -left-8 -top-8 -z-10 hidden rounded-[32px] bg-[#1B183C] sm:block"
      />
      <div class="space-y-16">
        <div class="space-y-8">
          <div class="flex justify-between">
            <h2 class="text-3xl font-bold">FIlter</h2>
            <button class="h-6 w-6">
              <Icon id="cross-2" class="h-6 w-6" />
              <span class="sr-only">close</span>
            </button>
          </div>

          <div>
            <label for="input1" class="font-bold uppercase"
              >Search by keyword</label
            >
            <div class="relative mt-2">
              <Icon
                id="magnifying-glass"
                class="absolute top-1/2 bottom-1/2 left-4 h-6 w-6 -translate-y-1/2"
                ariaHidden={true}
              />
              <input
                type="text"
                placeholder="Search jobs"
                class="w-full rounded-lg border-none bg-custom-3 p-3 pl-12"
              />
            </div>
          </div>

          <div>
            <p class="font-bold uppercase">View</p>
            <div class="mt-4 space-y-2">
              <div class="flex items-center gap-2">
                <button
                  class="relative h-8 w-8 rounded-full border border-custom-1 bg-custom-3"
                />
                <p>All job posts</p>
              </div>

              <div class="flex items-center gap-2">
                <button
                  class="relative h-8 w-8 rounded-full border border-custom-1 bg-custom-3"
                />
                <p>Active job posts</p>
              </div>

              <div class="flex items-center gap-2">
                <button
                  class="relative h-8 w-8 rounded-full border border-custom-1 bg-custom-3"
                >
                  <div class="absolute inset-1 rounded-full bg-custom-1" />
                </button>
                <p>Archived job posts</p>
              </div>
            </div>
          </div>

          <div>
            <p class="font-bold uppercase">Include</p>
            <div class="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                class="form-checkbox h-8 w-8 rounded-md text-custom-1"
              />
              <p>Jobs shared with me</p>
            </div>
          </div>
        </div>

        <button
          class="w-full rounded-lg bg-custom-2 p-4 font-semibold text-custom-3"
          >Save changes</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #bcbacf;
    --color-2: #ffbb56;
    --color-3: rgb(35, 32, 68);
  }

  [type='checkbox']:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(35, 32, 68)' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  }
</style>
