<script>
  import clsx from 'clsx'

  import Icon from '/src/components/Icon.svelte'

  const groups = [
    {
      name: 'Search',
      iconId: 'magnifying-glass',
      'bg-color': '#FB896B',
      list: [
        { name: 'SEO/Google Ads', special: false },
        { name: 'Youtube Ads', special: false },
        { name: 'Google shopping', special: true },
      ],
    },
    {
      name: 'CRO',
      iconId: 'drawing-pin',
      'bg-color': '#FB6B6B',
      list: [
        { name: 'Analysis', special: false },
        { name: 'Multi variant testing', special: false },
        { name: 'Landing pages', special: false },
      ],
    },
    {
      name: 'Social Media',
      iconId: 'chat-bubble',
      'bg-color': '#F1A864',
      list: [
        { name: 'Facebook', special: false },
        { name: 'LinkedIn', special: false },
        { name: 'Tik Tok', special: false },
      ],
    },
    {
      name: 'Other services',
      iconId: 'magnifying-glass',
      'bg-color': '#FBD36B',
      list: [
        { name: 'Marketing', special: false },
        { name: 'Digital tools', special: false },
        { name: 'Banner advertising', special: false },
      ],
    },
  ]
</script>

<div class="theme grid place-items-center min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl relative"
    >
      <div
        class="absolute -inset-y-6 inset-x-[42px] bg-white -z-10 rounded-3xl"
      />
      {#each groups as group, index}
        <div
          class={clsx(
            index === 0 &&
              'rounded-t-3xl md:rounded-tr-none py-16 pl-8 lg:pt-32 pr-8 lg:pl-16',
            index === 1 &&
              'md:rounded-tr-3xl lg:rounded-none py-16 pl-8 lg:pt-32 lg:pr-16',
            index === 2 && 'lg:rounded-tr-3xl py-16 pl-8 lg:pt-32 lg:pr-16',
            index === 3 && 'lg:rounded-bl-3xl py-16 pl-8 lg:pl-16 pr-8',
            group['bg-color'] && `bg-[${group['bg-color']}]`,
            'col-span-1 pb-16 min-w-max',
          )}
        >
          <div
            class={clsx(
              'space-y-4 text-white',
              index === 3 && 'text-[#485258]',
            )}
          >
            <div class="flex items-center gap-[9px] ml-2">
              <Icon id={group.iconId} className="w-6 h-6" />
              <h3 class="font-semibold text-2xl -mt-1">{group.name}</h3>
            </div>
            <div>
              {#each group.list as item}
                <p
                  class={clsx(
                    item.special && 'bg-[#F27251]',
                    'p-[10px] font-medium',
                  )}
                >
                  {item.name}
                </p>
              {/each}
            </div>
          </div>
        </div>
      {/each}
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
