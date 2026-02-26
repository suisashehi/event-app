<script>
	let { data } = $props();
</script>

<section class="form-wrapper">
	<h1>Edit Category</h1>

	<form method="POST" action="?/edit">

		<div class="form-group">
			<label for="name">Category name</label>
			<input type="text"
				id="name"
				name="name"
				required
				value={data.category.name}
			/>
		</div>

		<button type="submit" class="submit-btn">
			Update Category
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

	label {
		font-size: 0.9rem;
		font-weight: 500;
		color: #374151;
	}

	input {
		padding: 0.6rem 0.8rem;
		border-radius: 6px;
		border: 1px solid #d1d5db;
		font-size: 0.95rem;
		transition: all 0.2s ease;
	}

	input:focus {
		outline: none;
		border-color: #007acc;
		box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.15);
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
</style>
