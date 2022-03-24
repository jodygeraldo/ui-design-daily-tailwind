<script>
	const navLinks = ['Home', 'Become a customer', 'About us', 'FAQ', 'Return policy', 'Contact us']

	const languages = [
		{ name: 'Deutsch', enabled: false },
		{ name: 'English', enabled: true },
		{ name: 'Español', enabled: false },
		{ name: 'Français', enabled: false },
		{ name: 'Indonesian', enabled: false },
		{ name: 'Italian', enabled: false },
		{ name: 'Nederlands', enabled: false },
		{ name: 'Polnisch', enabled: false },
		{ name: 'Português', enabled: false },
		{ name: 'русский', enabled: false },
		{ name: 'Tiếng Việt', enabled: false },
		{ name: 'Türkçe', enabled: false }
	]

	const others = ['Terms of purchase', 'Security and privacy', 'Newsletter']
</script>

<div class="theme bg-low-contrast grid place-content-center h-screen">
	<footer class="grid place-items-center max-w-6xl bg-primary p-10 rounded-xl shadow-lg">
		<div class="flex justify-between gap-28">
			<div class="flex-1">
				<h2 class="font-bold text-2xl text-high-contrast font-serif">About the store</h2>
				<nav class="mt-4">
					<ul class="space-y-2 text-high-contrast">
						{#each navLinks as link}
							<li>{link}</li>
						{/each}
					</ul>
				</nav>
			</div>
			<div class="flex-1">
				<h2 class="font-bold text-2xl text-high-contrast font-serif">Language</h2>
				<ul class="mt-4 text-high-contrast flex flex-wrap items-center">
					{#each languages as language}
						<li
							class={`mr-4 py-1 ${
								language.enabled && 'bg-ascent px-2 rounded-md text-high-contrast'
							}`}
						>
							{language.name}
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex-1">
				<h2 class="font-bold text-2xl text-high-contrast font-serif">Get in touch</h2>
				<div class="flex gap-6 mt-4">
					<svg
						width={15}
						height={15}
						viewBox="0 0 15 15"
						fill="none"
						class="w-6 h-6 text-high-contrast"
					>
						<use href="/static/icons/discord.svg#discord" />
					</svg>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						class="w-6 h-6 text-high-contrast"
					>
						<use href="/static/icons/github.svg#github" />
					</svg>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						class="w-6 h-6 text-high-contrast"
					>
						<use href="/static/icons/twitter.svg#twitter" />
					</svg>
				</div>
			</div>
		</div>
		<div class="text-low-contrast mt-2">
			<ul class="flex gap-4">
				{#each others as other}
					<li>{other}</li>
				{/each}
			</ul>
		</div>
	</footer>
</div>

<style>
	.theme {
		--color-primary: #1e3161;
		--color-ascent: #5ac1d8;
		--text-color-high: #ffffff;
		--text-color-low: #838faa;
	}
</style>
