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
            ? 'border-gray-8 text-gray-9 pointer-events-none'
            : 'hover:border-gray-7',
          'border-transparent text-gray-11 hover:text-gray-12 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
        )}
      >
        Sorted by date
      </a>

      <a
        href="?sort=recent"
        disabled={sortedBy === 'recent'}
        class={clsx(
          sortedBy === 'recent'
            ? 'border-gray-8 text-gray-9 pointer-events-none'
            : 'hover:border-gray-7',
          'border-transparent text-gray-11 hover:text-gray-12 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
        )}
      >
        Recent built
      </a>
    </nav>
  </div>
</div>
