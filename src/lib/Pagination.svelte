<script lang="ts">
  import Icon from '$lib/Icon.svelte'
  import clsx from 'clsx'

  export let page: number
  export let totalPages: number

  function range(start: number | null, end: number): number[] {
    return Array.from(Array(end).keys())
      .map((x) => x + 1)
      .slice(start)
  }
</script>

<nav class="mt-8 flex items-center justify-between border-t border-gray-6">
  <div class="-mt-px flex w-0 flex-1">
    <a
      href={`?page=${page - 1}`}
      disabled={page === 1}
      class={clsx(
        page === 1
          ? 'pointer-events-none opacity-50'
          : 'hover:border-gray-8 hover:text-gray-12',
        'inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-11',
      )}
    >
      <Icon id="arrow-left" class="mr-3 h-5 w-5 text-gray-11" />
      Previous
    </a>
  </div>
  <div class="hidden md:-mt-px md:flex">
    {#if page < 6 || totalPages < 8}
      {#each range(null, totalPages > 7 ? 7 : totalPages) as pageIndex}
        <a
          href={`?page=${pageIndex}`}
          class={clsx(
            page === pageIndex
              ? 'pointer-events-none border-gray-7 text-gray-9'
              : 'border-transparent text-gray-11 hover:border-gray-8 hover:text-gray-12',
            'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium',
          )}
          aria-current={page === pageIndex ? 'page' : undefined}
        >
          {pageIndex}
        </a>
      {/each}
    {:else}
      {#if page > 5}
        <a
          href={`?page=1`}
          class={clsx(
            page === 1
              ? 'border-gray-7 text-gray-9 pointer-events-none'
              : 'border-transparent text-gray-11 hover:text-gray-12 hover:border-gray-8',
            'border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium',
          )}
          aria-current={page === 1 ? 'page' : undefined}
        >
          {1}
        </a>
        <span
          class="border-transparent text-gray-11 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
          ...
        </span>
      {/if}
      {#if totalPages - page > 1}
        {#each range(page - 3, page) as pageIndex}
          <a
            href={`?page=${pageIndex}`}
            class={clsx(
              page === pageIndex
                ? 'border-gray-7 text-gray-9 pointer-events-none'
                : 'border-transparent text-gray-11 hover:text-gray-12 hover:border-gray-8',
              'border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium',
            )}
            aria-current={page === pageIndex ? 'page' : undefined}
          >
            {pageIndex}
          </a>
        {/each}
        {#each range(page, page + 2) as pageIndex}
          <a
            href={`?page=${pageIndex}`}
            class={clsx(
              page === pageIndex
                ? 'border-gray-7 text-gray-9 pointer-events-none'
                : 'border-transparent text-gray-11 hover:text-gray-12 hover:border-gray-8',
              'border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium',
            )}
            aria-current={page === pageIndex ? 'page' : undefined}
          >
            {pageIndex}
          </a>
        {/each}
      {:else if totalPages - page === 1}
        {#each range(page - 4, page) as pageIndex}
          <a
            href={`?page=${pageIndex}`}
            class={clsx(
              page === pageIndex
                ? 'border-gray-7 text-gray-9 pointer-events-none'
                : 'border-transparent text-gray-11 hover:text-gray-12 hover:border-gray-8',
              'border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium',
            )}
            aria-current={page === pageIndex ? 'page' : undefined}
          >
            {pageIndex}
          </a>
        {/each}
        <a
          href={`?page=${totalPages}`}
          class={clsx(
            page === totalPages
              ? 'border-gray-7 text-gray-9 pointer-events-none'
              : 'border-transparent text-gray-11 hover:text-gray-12 hover:border-gray-8',
            'border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium',
          )}
          aria-current={page === totalPages ? 'page' : undefined}
        >
          {totalPages}
        </a>
      {:else}
        {#each range(page - 5, totalPages) as pageIndex}
          <a
            href={`?page=${pageIndex}`}
            class={clsx(
              page === pageIndex
                ? 'border-gray-7 text-gray-9 pointer-events-none'
                : 'border-transparent text-gray-11 hover:text-gray-12 hover:border-gray-8',
              'border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium',
            )}
            aria-current={page === pageIndex ? 'page' : undefined}
          >
            {pageIndex}
          </a>
        {/each}
      {/if}
    {/if}
  </div>
  <div class="-mt-px flex w-0 flex-1 justify-end">
    <a
      href={`?page=${page + 1}`}
      disabled={page === totalPages}
      class={clsx(
        page === totalPages
          ? 'pointer-events-none opacity-50'
          : 'hover:border-gray-8 hover:text-gray-12',
        'inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-11',
      )}
    >
      Next
      <Icon id="arrow-right" class="ml-3 h-5 w-5 text-gray-11" />
    </a>
  </div>
</nav>
