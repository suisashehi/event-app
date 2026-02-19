<script>
	let { data } = $props();

	// Safe date formatting (falls startdate kein echtes Date-Objekt ist)
	const formattedDate =
		data.event.startdate
			? new Date(data.event.startdate).toISOString().substring(0, 10)
			: '';
</script>

<section class="form-wrapper">
	<h1>Edit Event</h1>

	<form method="POST" action="?/edit">

		<div class="form-group">
			<label for="name">Event name</label>
			<input
				type="text"
				id="name"
				name="name"
				required
				value={data.event.name}
			/>
		</div>

		<div class="form-group">
			<label for="description">Event description</label>
			<textarea
				name="description"
				id="description"
				rows="4"
			>{data.event.description}</textarea>
		</div>

		<div class="form-row">
			<div class="form-group">
				<label for="startdate">Event start date</label>
				<input
					type="date"
					name="startdate"
					id="startdate"
					required
					value={formattedDate}
				/>
			</div>

			<div class="form-group">
				<label for="starttime">Event start time</label>
				<input
					type="time"
					name="starttime"
					id="starttime"
					required
					value={data.event.starttime}
				/>
			</div>
		</div>

		<button type="submit" class="submit-btn">
			Update Event
		</button>

	</form>
</section>

<style>
	.form-wrapper {
		max-width: 700px;
		margin: 3rem auto;
		padding: 2rem;
		background: white;
		border-radius: 12px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 1.6rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.form-row {
		display: flex;
		gap: 1rem;
	}

	label {
		font-size: 0.9rem;
		font-weight: 500;
		color: #374151;
	}

	input,
	textarea {
		padding: 0.6rem 0.8rem;
		border-radius: 6px;
		border: 1px solid #d1d5db;
		font-size: 0.95rem;
		transition: all 0.2s ease;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #007acc;
		box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.15);
	}

	textarea {
		resize: vertical;
	}

	.submit-btn {
		align-self: flex-start;
		padding: 0.7rem 1.4rem;
		background: #007acc;
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 500;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.submit-btn:hover {
		background: #005fa3;
	}

	@media (max-width: 600px) {
		.form-row {
			flex-direction: column;
		}
	}
</style>
