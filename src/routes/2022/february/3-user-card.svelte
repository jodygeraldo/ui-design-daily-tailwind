<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>User Card - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="bg-white rounded-xl lg:rounded-3xl p-6 lg:p-12 max-w-lg mx-auto relative"
    >
      <div
        class="absolute inset-x-4 top-4 -bottom-4 -z-10 bg-[#e6effa] rounded-xl lg:rounded-3xl"
      />
      <div class="flex items-center gap-4">
        <img
          src="/assets/images/person-1.png"
          alt=""
          class="w-24 h-24 rounded-full border-8 border-[#e6effa]"
        />
        <div class="text-primary">
          <h2 class="font-bold text-lg lg:text-2xl">David Grant</h2>
          <p class="mt-2 text-sm lg:text-base font-medium">3D Artist</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden sm:block w-24 shrink-0" />
        <div class="text-primary mt-4 sm:mt-0">
          <div class="space-y-2 lg:space-y-4">
            <div class="flex items-center gap-1">
              <Icon id="star" className="h-8 w-8" />
              <p class="text-sm lg:text-base font-medium">4.7 Rating</p>
            </div>
            <div class="flex items-center gap-1">
              <Icon id="face" className="h-8 w-8" />
              <p class="text-sm lg:text-base font-medium">4,447 Reviews</p>
            </div>
            <div class="flex items-center gap-1">
              <Icon id="person" className="h-8 w-8" />
              <p class="text-sm lg:text-base font-medium">478 Students</p>
            </div>
          </div>

          <p class="mt-7 text-base font-medium lg:text-lg">
            David Grant has been making video games for a living for more than
            14 years as a Designer, Producer, Creative Director, and Executive
            Producer, creating games for console, mobile, PC and Facebook.
          </p>

          <button class="mt-7 rounded border-2 p-2 border-ascent"
            >Show more</button
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #1c2b62;
    --color-ascent: #c4cadf;
  }
</style>
