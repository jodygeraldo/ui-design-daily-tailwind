<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  import Icon from '$lib/Icon.svelte'

  const checkboxes = [
    { text: 'The software is to difficult to use', checked: false },
    { text: 'Features I need are missing.', checked: false },
    { text: 'Too expensive', checked: false },
    { text: 'I am done with this project.', checked: true },
    { text: 'I am using a different software now.', checked: false },
  ]
</script>

<svelte:head>
  <title>Cancel Plan Modal - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-6 py-8 lg:px-8 lg:py-20">
    <div
      class="relative mx-auto max-w-lg rounded-2xl bg-white py-8 pl-14 pr-6 text-custom-1 lg:py-14 lg:pl-24 lg:pr-11"
    >
      <div
        class="absolute -top-4 right-3 bottom-6 -left-4 -z-10 rounded-2xl bg-[#DDDDF2] sm:-top-8 sm:right-6 sm:bottom-12 sm:-left-8 lg:-top-12 lg:right-8 lg:bottom-16 lg:-left-12 2xl:-top-[72px] 2xl:right-12 2xl:bottom-24 2xl:-left-[72px]"
      />
      <div class="space-y-7">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-bold text-custom-1 lg:text-2xl">
              Cancel site plan
            </h2>
            <Icon id="cross-2" class="h-6 w-6 text-custom-1" />
          </div>

          <p class="mr-8 text-custom-1 lg:mr-[52px] lg:text-lg">
            We’re sorry to see you cancel your plan. To help us improve, we have
            a few short questions for you before you leave us.
          </p>
        </div>

        <div class="mr-8 space-y-4 lg:mr-[52px]">
          <h3 class="text-sm font-semibold text-custom-1 lg:text-base">
            Why are you cancelling your plan?
          </h3>

          <div class="space-y-2">
            {#each checkboxes as checkbox}
              <div class="flex items-center gap-2">
                <div class="relative">
                  <button
                    class="h-5 w-5 rounded border border-custom-1 bg-white"
                  />
                  {#if checkbox.checked}
                    <Icon
                      id="check"
                      class="absolute top-1/2 bottom-1/2 right-1/2 h-4 w-4 -translate-y-[70%] translate-x-1/2 text-custom-1"
                    />
                  {/if}
                </div>
                <p class="text-sm lg:text-base">{checkbox.text}</p>
              </div>
            {/each}
          </div>
        </div>

        <div class="mr-8 space-y-2 lg:mr-[52px]">
          <label class="text-sm text-black lg:text-base" for="input"
            >Type 'CANCEL' to confirm</label
          >
          <input
            type="text"
            id="input"
            placeholder="CANCEL"
            class="w-full rounded border border-custom-1 p-2"
          />
        </div>

        <div class="mr-8 space-y-4 lg:mr-[52px]">
          <button
            class="w-full rounded bg-custom-2 p-2 text-sm text-white lg:text-base"
            >Cancel plan</button
          >
          <button
            class="w-full rounded p-2 text-sm text-custom-1 opacity-60 lg:text-base"
            >Never mind</button
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #1e1e4e;
    --color-2: #e33655;
  }
</style>
