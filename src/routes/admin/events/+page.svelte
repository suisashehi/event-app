<script>
	let { data } = $props();
</script>

<section class="wrapper">
	<div class="header">
		<h1>Manage Events</h1>

		<a href="/admin/event/new">
			<button class="primary">+ Add Event</button>
		</a>
	</div>

	<main>
		{#each data.events as event}
			<div class="card">
				<div class="left">
					<div class="dot"></div>
					<div>
						<p class="name">{event.name}</p>
						<h3 class="category">{event.category_name}</h3>
					</div>
				</div>

				<div class="actions">
					<a href={`/admin/event/${event.id}/edit`}>
						<button class="edit">Edit</button>
					</a>

					<form method="POST" action="?/delete">
						<input type="hidden" name="id" value={event.id} />
						<button type="submit" class="delete">Delete</button>
					</form>
				</div>
			</div>
		{/each}
	</main>
</section>

<style>
	body {
		background: #f9fafb;
	}

	.wrapper {
		max-width: 920px;
		margin: 60px auto;
		padding: 0 20px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 36px;
	}

	h1 {
		font-size: 30px;
		font-weight: 700;
		color: #111827;
		margin: 0;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.card {
		background: #ffffff;
		border-radius: 14px;
		padding: 22px 28px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		transition: all 0.25s ease;
		border: 1px solid #f1f5f9;
	}

	.card:hover {
		transform: translateY(-3px);
		box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
	}

	.left {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.dot {
		width: 10px;
		height: 10px;
		background: #2563eb;
		border-radius: 50%;
	}

	.name {
		font-size: 18px;
		font-weight: 600;
		color: #1f2937;
		margin: 0 0 4px 0;
	}

	.category {
		font-size: 14px;
		font-weight: 500;
		color: #6b7280;
		margin: 0;
	}

	.actions {
		display: flex;
		gap: 14px;
	}

	button {
		padding: 9px 18px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		font-size: 14px;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.primary {
		background: #2563eb;
		color: white;
		box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
	}

	.primary:hover {
		background: #1e40af;
	}

	.edit {
		background: #eef2ff;
		color: #3730a3;
	}

	.edit:hover {
		background: #e0e7ff;
	}

	.delete {
		background: #fee2e2;
		color: #b91c1c;
	}

	.delete:hover {
		background: #fecaca;
	}

	@media (max-width: 650px) {
		.card {
			flex-direction: column;
			align-items: flex-start;
			gap: 18px;
		}

		.actions {
			width: 100%;
			justify-content: flex-end;
		}
	}
</style>
