<script>
	let { data } = $props();
</script>

<section class="form-wrapper">
	<h1>New Event</h1>

	<form method="POST" action="?/create">

		<div class="form-group">
			<label for="name">Event name</label>
			<input type="text" id="name" name="name" required />
		</div>

		<div class="form-group">
			<label for="description">Event description</label>
			<textarea name="description" id="description" rows="4"></textarea>
		</div>

		<div class="form-row">
			<div class="form-group">
				<label for="startdate">Event start date</label>
				<input type="date" name="startdate" id="startdate" />
			</div>

			<div class="form-group">
				<label for="starttime">Event start time</label>
				<input type="time" name="starttime" id="starttime" />
			</div>
		</div>

		<div class="form-group">
			<label for="category">Select a category</label>
			<select name="category" id="category">
				<option value="">Select category</option>
				{#each data.categories as category}
					<option value={category.id}>
						{category.name}
					</option>
				{/each}
			</select>
		</div>

		<button type="submit" class="submit-btn">
			Create Event
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
	select,
	textarea {
		padding: 0.6rem 0.8rem;
		border-radius: 6px;
		border: 1px solid #d1d5db;
		font-size: 0.95rem;
		transition: all 0.2s ease;
	}

	input:focus,
	select:focus,
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
		transition: all 0.2s ease;
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
