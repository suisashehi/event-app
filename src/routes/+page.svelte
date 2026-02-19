<script>
	let { data } = $props();
</script>

<section class="events-container">
	<h1>Events</h1>
	<h2 class="subtitle">{data.pageTitle}</h2>

	<div class="events-grid">
		{#each data.events as event}
			<a class="event-card" href={"/events/" + event.id}>
				<h3>{event.name}</h3>
				<p class="description">{event.description}</p>
				<span class="category">{event.category_name}</span>
			</a>
		{/each}
	</div>
</section>

<style>
	.events-container {
		max-width: 1100px;
		margin: 60px auto;
		padding: 0 24px;
	}

	h1 {
		font-size: 32px;
		font-weight: 700;
		margin-bottom: 6px;
		color: #111827;
	}

	.subtitle {
		font-size: 15px;
		color: #6b7280;
		margin-bottom: 40px;
	}

	.events-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 28px;
	}

	.event-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 28px;
		background: #ffffff;
		border-radius: 16px;
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.05);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		border: 1px solid #f1f5f9;
		min-height: 200px;
	}

	.event-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
		border-color: #2563eb;
	}

	.event-card h3 {
		margin: 0 0 12px 0;
		font-size: 20px;
		font-weight: 600;
		color: #1f2937;
	}

	.description {
		font-size: 14px;
		color: #4b5563;
		line-height: 1.6;
		margin-bottom: 20px;
		flex-grow: 1;
	}

	.category {
		display: inline-block;
		padding: 6px 14px;
		font-size: 12px;
		background: #eef2ff;
		color: #3730a3;
		border-radius: 999px;
		font-weight: 600;
		letter-spacing: 0.4px;
		width: fit-content;
	}

	@media (max-width: 600px) {
		.events-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
