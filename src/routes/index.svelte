<script>
  import { Temporal, Intl } from '@js-temporal/polyfill'
  import Icon from '/src/components/Icon.svelte'

  const list = [
    {
      id: 1531,
      title: 'Pricing',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 17,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-pricing-radio-button-day-1531',
      linkComponent: '/2022/january/17-pricing',
      imageUrl: '17-january-2022.png',
    },
    {
      id: 1530,
      title: 'Footer',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 14,
        }),
      ),
      linkOriginal: 'https://www.uidesigndaily.com/posts/figma-footer-day-1530',
      linkComponent: '/2022/january/14-footer',
      imageUrl: '14-january-2022.png',
    },
    {
      id: 1529,
      title: 'Storage Plan UI Design',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 13,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-storage-plan-ui-design-card-pricing-day-1529',
      linkComponent: '/2022/january/13-storage-plan-ui-design',
      imageUrl: '13-january-2022.png',
    },
    {
      id: 1528,
      title: 'Sign Up',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 12,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-sign-up-authentication-day-1528',
      linkComponent: '/2022/january/12-sign-up',
      imageUrl: '12-january-2022.png',
    },
    {
      id: 1527,
      title: 'Share Document',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 11,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-share-document-day-1527',
      linkComponent: '/2022/january/11-share-document',
      imageUrl: '11-january-2022.png',
    },
    {
      id: 1526,
      title: 'App UI Components',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 10,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-app-ui-components-menu-card-storage-list-status-day-1526',
      linkComponent: '/2022/january/10-app-ui-components',
      imageUrl: '10-january-2022.png',
    },
    {
      id: 1525,
      title: 'About Card',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 7,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-about-card-details-day-1525',
      linkComponent: '/2022/january/7-about-card',
      imageUrl: '7-january-2022.png',
    },
    {
      id: 1524,
      title: 'Job Cards',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 6,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-job-cards-list-card-day-1524',
      linkComponent: '/2022/january/6-job-cards',
      imageUrl: '6-january-2022.png',
    },
    {
      id: 1523,
      title: 'Select Plan',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 5,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-select-plan-pricing-price-card-day-1523',
      linkComponent: '/2022/january/5-select-plan',
      imageUrl: '5-january-2022.png',
    },
    {
      id: 1522,
      title: 'Set Status',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 4,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-set-status-dropdown-day-1522',
      linkComponent: '/2022/january/4-set-status',
      imageUrl: '4-january-2022.png',
    },
    {
      id: 1521,
      title: 'Footer',
      date: Intl.DateTimeFormat().format(
        Temporal.PlainDate.from({
          year: 2022,
          month: 1,
          day: 3,
        }),
      ),
      linkOriginal:
        'https://www.uidesigndaily.com/posts/figma-footer-dark-mode-day-1521',
      linkComponent: '/2022/january/3-footer',
      imageUrl: '3-january-2022.png',
    },
  ]
</script>

<div class="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
  <ul
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    {#each list as item}
      <li
        class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div class="flex flex-1 flex-col p-8">
          <img
            class="aspect-video w-full flex-shrink-0 rounded-lg"
            src={`/assets/images/${item.imageUrl}`}
            alt=""
          />
          <h3 class="mt-6 text-sm font-medium text-gray-900">{item.title}</h3>

          <time class="mt-1 text-sm text-gray-500">{item.date}</time>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a
                href={item.linkOriginal}
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span> UIDesignDaily </span>
                <Icon id="external-link" className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href={item.linkComponent}
                class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <span> Implementation </span>
                <Icon id="arrow-top-right" className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
