<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Add Members - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-lg bg-gradient-to-bl from-[#EAF7FF] to-white px-6 py-8 shadow-[0_4px_65px_0_#059f9f40] sm:px-8 sm:py-12"
    >
      <Icon id="cross-1" class="absolute top-4 right-4 h-5 w-5" />

      <div>
        <h2 class="text-2xl font-bold text-custom-1">Add members</h2>

        <div class="mt-4 flex items-center gap-4">
          <div class="flex-1">
            <label for="email" class="sr-only">Email</label>
            <input
              type="email"
              id="email"
              class="form-input w-full truncate border-0 border-b-[1px] border-[#ddd] bg-transparent py-4 pr-4 pl-0 placeholder:text-lg focus:outline-none"
              placeholder="Enter email address"
            />
          </div>
          <button class="rounded-lg bg-[#c4c4c410] p-2 text-lg text-[#2D9CDB]"
            >Add</button
          >
        </div>
        <div class="mt-4 flex flex-wrap items-center gap-2">
          <div
            class="flex items-center gap-3 rounded-lg border border-custom-2 bg-[#f4fbff] py-2 px-4"
          >
            <p class="text-[#4F4F4F]">James Patterson</p>
            <Icon id="cross-1" class="h-4 w-4 text-[#83A0B1]" />
          </div>
          <div
            class="flex items-center gap-3 rounded-lg border border-custom-2 bg-[#f4fbff] py-2 px-4"
          >
            <p class="text-[#4F4F4F]">Jamel E. Getz</p>
            <Icon id="cross-1" class="h-4 w-4 text-[#83A0B1]" />
          </div>
        </div>

        <div class="mt-12">
          <h2 class="text-2xl font-bold text-custom-1">Allow members to</h2>
          <div class="mt-4 items-center justify-between sm:mt-0 sm:flex">
            <div class="mt-2 flex items-center gap-2">
              <div class="relative h-5 w-5">
                <button class="h-5 w-5 border border-custom-2 bg-transparent" />
              </div>
              <p class="text-lg text-[#4F4F4F]">Edit</p>
            </div>
            <div class="mt-2 flex items-center gap-2">
              <div class="relative h-5 w-5">
                <button class="h-5 w-5 border border-custom-2 bg-transparent" />
                <Icon
                  id="check"
                  class="pointer-events-none absolute top-1/2 bottom-1/2 right-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 text-[#7A7E80]"
                />
              </div>
              <p class="text-lg text-[#4F4F4F]">Comment</p>
            </div>
            <div class="mt-2 flex items-center gap-2">
              <div class="relative h-5 w-5">
                <button class="h-5 w-5 border border-custom-2 bg-transparent" />
              </div>
              <p class="text-lg text-[#4F4F4F]">Add members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #505050;
    --color-2: #b2e3ff;
  }
</style>
