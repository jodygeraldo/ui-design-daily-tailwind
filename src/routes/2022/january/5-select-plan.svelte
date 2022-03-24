<script>
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

<div class="theme grid place-content-center min-h-screen">
  <div class="bg-white rounded-[42px] p-16 max-w-3xl space-y-[56px] shadow-lg">
    <h2 class="font-bold text-[32px]">Choose a trial plan</h2>

    <div class="space-y-[56px]">
      <div class="space-y-6">
        {#each plans as plan}
          <div
            class="bg-[#f4f9fa] border border-[#B3C4C6] rounded-2xl p-6 flex space-x-[13px]"
          >
            <button
              class={`${
                plan.enable
                  ? 'border-[9px] border-primary'
                  : 'border border-ascent'
              } rounded-full bg-white shrink-0 w-[35px] h-[35px]`}
            />
            <div class="space-y-3">
              <h3 class="font-medium text-2xl">{plan.name}</h3>
              <p class="font-medium text-lg">
                {plan.description}
              </p>
            </div>
          </div>
        {/each}
      </div>

      <div class="space-y-6 pl-6">
        <div class="flex space-x-[13px]">
          <button
            class="w-[35px] h-[35px] border border-[#5e797b] rounded-lg shrink-0"
          />
          <p class="text-lg font-medium">
            I agree to the <span class="underline underline-offset-1"
              >Agreement and Terms</span
            >. Find out more about how we use and protect your data in our
            <span class="underline underline-offset-1">Privacy Policy</span>.
          </p>
        </div>
        <div class="flex space-x-[13px]">
          <button class="w-[35px] h-[35px] border border-ascent rounded-lg" />
          <p class="text-lg font-medium">
            I’d like to receive direct marketing email updates.
          </p>
        </div>
      </div>

      <div class="space-y-6 pr-[10px]">
        <button
          class="w-full p-[10px] bg-primary text-white text-lg font-medium"
          >Start free trial</button
        >
        <p class="font-medium text-center">No credit card needed</p>
      </div>
    </div>
  </div>
</div>

<style>
  .theme {
    --color-primary: #130f29;
    --color-ascent: #5e797b;
  }
</style>
