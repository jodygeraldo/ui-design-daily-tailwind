<script context="module" lang="ts">
  import Icon from '$lib/Icon.svelte'

  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<svelte:head>
  <title>Add Members - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="shadow-[0_4px_65px_0_#059f9f40] px-6 sm:px-8 py-8 sm:py-12 relative bg-gradient-to-bl from-[#EAF7FF] to-white max-w-lg mx-auto"
    >
      <Icon id="cross-1" class="absolute w-5 h-5 top-4 right-4" />

      <div>
        <h2 class="font-bold text-2xl text-primary">Add members</h2>

        <div class="flex items-center gap-4 mt-4">
          <div class="flex-1">
            <label for="email" class="sr-only">Email</label>
            <input
              type="email"
              id="email"
              class="form-input w-full truncate placeholder:text-lg focus:outline-none border-0 border-b-[1px] border-[#ddd] bg-transparent py-4 pr-4 pl-0"
              placeholder="Enter email address"
            />
          </div>
          <button class="text-lg p-2 bg-[#c4c4c410] rounded-lg text-[#2D9CDB]"
            >Add</button
          >
        </div>
        <div class="flex flex-wrap items-center gap-2 mt-4">
          <div
            class="flex gap-3 items-center bg-[#f4fbff] border border-ascent py-2 px-4 rounded-lg"
          >
            <p class="text-[#4F4F4F]">James Patterson</p>
            <Icon id="cross-1" class="w-4 h-4 text-[#83A0B1]" />
          </div>
          <div
            class="flex gap-3 items-center bg-[#f4fbff] border border-ascent py-2 px-4 rounded-lg"
          >
            <p class="text-[#4F4F4F]">Jamel E. Getz</p>
            <Icon id="cross-1" class="w-4 h-4 text-[#83A0B1]" />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="font-bold text-2xl text-primary">Allow members to</h2>
          <div class="sm:flex justify-between items-center mt-4 sm:mt-0">
            <div class="mt-2 flex gap-2 items-center">
              <div class="relative w-5 h-5">
                <button class="w-5 h-5 border border-ascent bg-transparent" />
              </div>
              <p class="text-[#4F4F4F] text-lg">Edit</p>
            </div>
            <div class="mt-2 flex gap-2 items-center">
              <div class="relative w-5 h-5">
                <button class="w-5 h-5 border border-ascent bg-transparent" />
                <Icon
                  id="check"
                  class="absolute top-1/2 bottom-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-4 h-4 text-[#7A7E80] pointer-events-none"
                />
              </div>
              <p class="text-[#4F4F4F] text-lg">Comment</p>
            </div>
            <div class="mt-2 flex gap-2 items-center">
              <div class="relative w-5 h-5">
                <button class="w-5 h-5 border border-ascent bg-transparent" />
              </div>
              <p class="text-[#4F4F4F] text-lg">Add members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #505050;
    --color-ascent: #b2e3ff;
  }
</style>
