<script>
	let { children } = $props();
</script>

<header class="admin-header">
	<div class="header-container">
		<h1>Admin Dashboard</h1>

		<a href="/" class="back-link">
			← Back to Website
		</a>
	</div>
</header>

{@render children()}

<style>
	.admin-header {
		background: linear-gradient(135deg, #0f172a, #1e293b);
		color: white;
		padding: 20px 0;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
		position: relative;
	}

	.header-container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		font-size: 24px;
		font-weight: 700;
		margin: 0;
		letter-spacing: 0.6px;
		background: linear-gradient(90deg, #ffffff, #cbd5e1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.back-link {
		color: #60a5fa;
		text-decoration: none;
		font-size: 14px;
		font-weight: 600;
		padding: 8px 14px;
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.08);
		transition: all 0.25s ease;
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.back-link:hover {
		background: rgba(255, 255, 255, 0.18);
		color: white;
		transform: translateX(-4px);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
	}
</style>
