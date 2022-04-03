<script lang="ts">
  import clsx from 'clsx'

  export let sortedBy: 'date' | 'recent'
</script>

<div class="mt-6">
  <div class="border-b border-gray-6">
    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
      <a
        href="?sort=date"
        disabled={sortedBy === 'date'}
        class={clsx(
          sortedBy === 'date'
            ? 'pointer-events-none border-gray-8 text-gray-9'
            : 'hover:border-gray-7',
          'whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-11 hover:text-gray-12',
        )}
      >
        Sorted by date
      </a>

      <a
        href="?sort=recent"
        disabled={sortedBy === 'recent'}
        class={clsx(
          sortedBy === 'recent'
            ? 'pointer-events-none border-gray-8 text-gray-9'
            : 'hover:border-gray-7',
          'whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-11 hover:text-gray-12',
        )}
      >
        Recent built
      </a>
    </nav>
  </div>
</div>
