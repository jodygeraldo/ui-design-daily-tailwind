<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        status,
        name: status === 404 ? 'Page not found' : 'Internal server error',
        message:
          status === 404
            ? 'Sorry, we couldn’t find the page you’re looking for.'
            : 'Sorry, something went wrong.',
      },
    }
  }
</script>

<script lang="ts">
  export let status: number
  export let name: string
  export let message: string
</script>

<div
  class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
>
  <div class="max-w-max mx-auto">
    <main class="sm:flex">
      <p class="text-4xl font-extrabold text-gray-9 sm:text-5xl">{status}</p>
      <div class="sm:ml-6">
        <div class="sm:border-l sm:border-gray-200 sm:pl-6">
          <h1
            class="text-4xl font-extrabold text-gray-12 tracking-tight sm:text-5xl"
          >
            {name}
          </h1>
          <p class="mt-1 text-base text-gray-11">
            {message}
          </p>
        </div>
        <div
          class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"
        >
          <a
            href="/"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-12 bg-gray-3 hover:bg-gray-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-7 focus:ring-offset-gray-2"
          >
            Go back home
          </a>
        </div>
      </div>
    </main>
  </div>
</div>
