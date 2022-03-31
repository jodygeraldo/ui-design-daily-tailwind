<script>
  import Icon from '$lib/Icon.svelte'
</script>

<svelte:head>
  <title>Footer - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid min-h-screen place-items-center">
  <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
    <div
      class="relative grid grid-cols-1 rounded-3xl md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        class="absolute -inset-y-6 inset-x-[42px] -z-10 rounded-3xl bg-white"
      />
      <div
        class="col-span-1 min-w-max rounded-t-3xl bg-[#FB896B] py-16 pb-16 pl-8 pr-8 md:rounded-tr-none lg:pt-32 lg:pl-16"
      >
        <div class="space-y-4 text-white">
          <div class="ml-2 flex items-center gap-[9px]">
            <Icon id="magnifying-glass" className="w-6 h-6" />
            <h3 class="-mt-1 text-2xl font-semibold">Search</h3>
          </div>
          <div>
            <p class="p-[10px] font-medium">SEO/Google Ads</p>
            <p class="p-[10px] font-medium">Youtube Ads</p>
            <p class="bg-[#F27251] p-[10px] font-medium">Google shopping</p>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 min-w-max bg-[#FB6B6B] py-16 pb-16 pl-8 md:rounded-tr-3xl lg:rounded-none lg:pt-32 lg:pr-16"
      >
        <div class="space-y-4 text-white">
          <div class="ml-2 flex items-center gap-[9px]">
            <Icon id="drawing-pin" className="w-6 h-6" />
            <h3 class="-mt-1 text-2xl font-semibold">CRO</h3>
          </div>
          <div>
            <p class="p-[10px] font-medium">Analysis</p>
            <p class="p-[10px] font-medium">Multi variant testing</p>
            <p class="p-[10px] font-medium">Landing pages</p>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 min-w-max bg-[#F1A864] py-16 pb-16 pl-8 lg:rounded-tr-3xl lg:pt-32 lg:pr-16"
      >
        <div class="space-y-4 text-white">
          <div class="ml-2 flex items-center gap-[9px]">
            <Icon id="chat-bubble" className="w-6 h-6" />
            <h3 class="-mt-1 text-2xl font-semibold">Social Media</h3>
          </div>
          <div>
            <p class="p-[10px] font-medium">Facebooks</p>
            <p class="p-[10px] font-medium">LinkedIn</p>
            <p class="p-[10px] font-medium">Tik Tok</p>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 min-w-max bg-[#FBD36B] py-16 pb-16 pl-8 pr-8 lg:rounded-bl-3xl lg:pl-16"
      >
        <div class="space-y-4 text-[#485258]">
          <div class="ml-2 flex items-center gap-[9px]">
            <Icon id="magnifying-glass" className="w-6 h-6" />
            <h3 class="-mt-1 text-2xl font-semibold">Other services</h3>
          </div>
          <div>
            <p class="p-[10px] font-medium">Marketing</p>
            <p class="p-[10px] font-medium">Digital tools</p>
            <p class="p-[10px] font-medium">Banner advertising</p>
          </div>
        </div>
      </div>

      <div
        class="rounded-b-3xl bg-[#485258] py-16 pl-8 md:col-span-2 lg:rounded-bl-none"
      >
        <div class="w-2/3 space-y-4 pl-[10px] md:w-7/12 xl:w-1/2">
          <h3 class="text-2xl font-semibold text-white">
            Do you want to increase your sales and reach your goals?
          </h3>
          <p class="font-medium text-white">
            Schedule a free, no-obligation conversation with one of our experts
            to quickly improve the results of your business.
          </p>
          <button class="bg-white p-4 text-lg font-medium text-[#485258]"
            >Book a conversation</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
