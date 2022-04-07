<script context="module">
  export async function load() {
    return {
      maxage: 31536000,
    }
  }
</script>

<script lang="ts">
  const plans = [
    {
      name: 'Standard',
      description:
        '5 TB of space with easy-to-use team management and collaboration tools.',
      enable: false,
    },
    {
      name: 'Advanced',
      description:
        'As much space as your team needs with sophisticated admin, audit, security and integration capabilities.',
      enable: true,
    },
  ]
</script>

<svelte:head>
  <title>Select Plan - UI Design Daily with Tailwind CSS</title>
</svelte:head>
<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div
      class="mx-auto max-w-3xl space-y-[56px] rounded-[42px] bg-white p-16 shadow-lg"
    >
      <h2 class="text-[32px] font-bold">Choose a trial plan</h2>

      <div class="space-y-[56px]">
        <div class="space-y-6">
          {#each plans as plan}
            <div
              class="flex space-x-[13px] rounded-2xl border border-[#B3C4C6] bg-[#f4f9fa] p-6"
            >
              <button
                class={`${
                  plan.enable
                    ? 'border-[9px] border-custom-1'
                    : 'border border-custom-2'
                } h-[35px] w-[35px] shrink-0 rounded-full bg-white`}
              />
              <div class="space-y-3">
                <h3 class="text-2xl font-medium">{plan.name}</h3>
                <p class="text-lg font-medium">
                  {plan.description}
                </p>
              </div>
            </div>
          {/each}
        </div>

        <div class="space-y-6 pl-6">
          <div class="flex space-x-[13px]">
            <button
              class="h-[35px] w-[35px] shrink-0 rounded-lg border border-[#5e797b]"
            />
            <p class="text-lg font-medium">
              I agree to the <span class="underline underline-offset-1"
                >Agreement and Terms</span
              >. Find out more about how we use and protect your data in our
              <span class="underline underline-offset-1">Privacy Policy</span>.
            </p>
          </div>
          <div class="flex space-x-[13px]">
            <button
              class="h-[35px] w-[35px] rounded-lg border border-custom-2"
            />
            <p class="text-lg font-medium">
              I’d like to receive direct marketing email updates.
            </p>
          </div>
        </div>

        <div class="space-y-6 pr-[10px]">
          <button
            class="w-full bg-custom-1 p-[10px] text-lg font-medium text-white"
            >Start free trial</button
          >
          <p class="text-center font-medium">No credit card needed</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-1: #130f29;
    --color-2: #5e797b;
  }
</style>
