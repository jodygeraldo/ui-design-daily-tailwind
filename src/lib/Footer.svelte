<script lang="ts">
  import Icon from '$lib/Icon.svelte'
  import type { IconId } from './IconType'

  const links: {
    name: string
    to: string
    iconId: IconId
  }[] = [
    {
      name: 'Discord',
      to: 'https://discordapp.com/users/321585722182205440',
      iconId: 'discord-logo',
    },
    {
      name: 'Twitter',
      to: 'https://twitter.com/jodygeraldo_',
      iconId: 'twitter-logo',
    },
    {
      name: 'GitHub',
      to: 'https://github.com/jodygeraldo',
      iconId: 'github-logo',
    },
  ]
</script>

<footer>
  <div
    class="container mx-auto py-12 md:flex md:items-center md:justify-between"
  >
    <div class="flex justify-center space-x-6 md:order-2">
      {#each links as link}
        <a href={link.to} class="text-gray-11 hover:text-gray-12">
          <span class="sr-only">{link.name}</span>
          <Icon id={link.iconId} class="h-6 w-6" ariaHidden={true} />
        </a>
      {/each}
    </div>
    <div class="mt-8 md:mt-0 md:order-1">
      <p class="text-center text-base text-gray-11">
        <a
          href="https://www.uidesigndaily.com/"
          rel="external"
          target="_blank"
          class="font-medium">UIDesignDaily</a
        >
        with
        <a
          href="https://tailwindcss.com/"
          rel="external"
          target="_blank"
          class="font-medium">Tailwind CSS</a
        >
        built by
        <a
          href="https://twitter.com/jodygeraldo_"
          rel="external"
          target="_blank"
          class="underline underline-offset-2 hover:text-gray-12"
          >Jody Geraldo</a
        >
      </p>
    </div>
  </div>
</footer>
