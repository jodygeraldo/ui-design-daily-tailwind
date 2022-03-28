<script>
  import Icon from '/src/components/Icon.svelte'
</script>

<svelte:head>
  <title>Footer - UI Design Daily with Tailwind CSS</title>
</svelte:head>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl relative"
    >
      <div
        class="absolute -inset-y-6 inset-x-[42px] bg-white -z-10 rounded-3xl"
      />
      <div
        class="col-span-1 pb-16 min-w-max bg-[#FB896B] rounded-t-3xl md:rounded-tr-none py-16 pl-8 lg:pt-32 pr-8 lg:pl-16"
      >
        <div class="space-y-4 text-white">
          <div class="flex items-center gap-[9px] ml-2">
            <Icon id="magnifying-glass" className="w-6 h-6" />
            <h3 class="font-semibold text-2xl -mt-1">Search</h3>
          </div>
          <div>
            <p class="p-[10px] font-medium">SEO/Google Ads</p>
            <p class="p-[10px] font-medium">Youtube Ads</p>
            <p class="bg-[#F27251] p-[10px] font-medium">Google shopping</p>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 pb-16 min-w-max bg-[#FB6B6B] md:rounded-tr-3xl lg:rounded-none py-16 pl-8 lg:pt-32 lg:pr-16"
      >
        <div class="space-y-4 text-white">
          <div class="flex items-center gap-[9px] ml-2">
            <Icon id="drawing-pin" className="w-6 h-6" />
            <h3 class="font-semibold text-2xl -mt-1">CRO</h3>
          </div>
          <div>
            <p class="p-[10px] font-medium">Analysis</p>
            <p class="p-[10px] font-medium">Multi variant testing</p>
            <p class="p-[10px] font-medium">Landing pages</p>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 pb-16 min-w-max bg-[#F1A864] lg:rounded-tr-3xl py-16 pl-8 lg:pt-32 lg:pr-16"
      >
        <div class="space-y-4 text-white">
          <div class="flex items-center gap-[9px] ml-2">
            <Icon id="chat-bubble" className="w-6 h-6" />
            <h3 class="font-semibold text-2xl -mt-1">Social Media</h3>
          </div>
          <div>
            <p class="p-[10px] font-medium">Facebooks</p>
            <p class="p-[10px] font-medium">LinkedIn</p>
            <p class="p-[10px] font-medium">Tik Tok</p>
          </div>
        </div>
      </div>

      <div
        class="col-span-1 pb-16 min-w-max bg-[#FBD36B] lg:rounded-bl-3xl py-16 pl-8 lg:pl-16 pr-8"
      >
        <div class="space-y-4 text-[#485258]">
          <div class="flex items-center gap-[9px] ml-2">
            <Icon id="magnifying-glass" className="w-6 h-6" />
            <h3 class="font-semibold text-2xl -mt-1">Other services</h3>
          </div>
          <div>
            <p class="p-[10px] font-medium">Marketing</p>
            <p class="p-[10px] font-medium">Digital tools</p>
            <p class="p-[10px] font-medium">Banner advertising</p>
          </div>
        </div>
      </div>

      <div
        class="bg-[#485258] md:col-span-2 rounded-b-3xl lg:rounded-bl-none py-16 pl-8"
      >
        <div class="w-2/3 md:w-7/12 xl:w-1/2 space-y-4 pl-[10px]">
          <h3 class="font-semibold text-2xl text-white">
            Do you want to increase your sales and reach your goals?
          </h3>
          <p class="font-medium text-white">
            Schedule a free, no-obligation conversation with one of our experts
            to quickly improve the results of your business.
          </p>
          <button class="font-medium text-lg text-[#485258] bg-white p-4"
            >Book a conversation</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
