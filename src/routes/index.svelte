<script>
  import { Temporal, Intl } from '@js-temporal/polyfill'
  import Icon from '/src/components/Icon.svelte'

  const list = [
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

<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
  <ul
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  >
    {#each list as item}
      <li
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        <div class="flex-1 flex flex-col p-8">
          <img
            class="w-full aspect-video flex-shrink-0 rounded-lg"
            src={`/static/images/${item.imageUrl}`}
            alt=""
          />
          <h3 class="mt-6 text-gray-900 text-sm font-medium">{item.title}</h3>

          <time class="mt-1 text-gray-500 text-sm">{item.date}</time>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <a
                href={item.linkOriginal}
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <span> UIDesignDaily </span>
                <Icon id="external-link" className="w-6 h-6 ml-2" />
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                href={item.linkComponent}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span> Implementation </span>
                <Icon id="arrow-top-right" className="w-6 h-6 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>
