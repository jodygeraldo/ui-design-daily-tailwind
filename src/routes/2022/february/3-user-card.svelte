<script context="module" lang="ts">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }

  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>User Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="relative mx-auto max-w-lg rounded-xl bg-white p-6 lg:rounded-3xl lg:p-12"
    >
      <div
        class="absolute inset-x-4 top-4 -bottom-4 -z-10 rounded-xl bg-[#e6effa] lg:rounded-3xl"
      />
      <div class="flex items-center gap-4">
        <img
          src="/assets/images/person-1.png"
          alt=""
          class="h-24 w-24 rounded-full border-8 border-[#e6effa]"
        />
        <div class="text-custom-1">
          <h2 class="text-lg font-bold lg:text-2xl">David Grant</h2>
          <p class="mt-2 text-sm font-medium lg:text-base">3D Artist</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden w-24 shrink-0 sm:block" />
        <div class="mt-4 text-custom-1 sm:mt-0">
          <div class="space-y-2 lg:space-y-4">
            <div class="flex items-center gap-1">
              <Icon id="star" class="h-8 w-8" />
              <p class="text-sm font-medium lg:text-base">4.7 Rating</p>
            </div>
            <div class="flex items-center gap-1">
              <Icon id="face" class="h-8 w-8" />
              <p class="text-sm font-medium lg:text-base">4,447 Reviews</p>
            </div>
            <div class="flex items-center gap-1">
              <Icon id="person" class="h-8 w-8" />
              <p class="text-sm font-medium lg:text-base">478 Students</p>
            </div>
          </div>

          <p class="mt-7 text-base font-medium lg:text-lg">
            David Grant has been making video games for a living for more than
            14 years as a Designer, Producer, Creative Director, and Executive
            Producer, creating games for console, mobile, PC and Facebook.
          </p>

          <button class="mt-7 rounded border-2 border-custom-2 p-2"
            >Show more</button
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #1c2b62;
    --color-2: #c4cadf;
  }
</style>
