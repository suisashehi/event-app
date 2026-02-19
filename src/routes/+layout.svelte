<script>
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<footer>
	<div class="footer-container">

		<div class="footer-section">
			<h2>Contact</h2>
			<a href="mailto:suiashehi08@gmail.com">
				✉ Write a mail
			</a>
		</div>

		<div class="footer-section">
			<h2>Admin</h2>
			<a href="/admin">
				🔒 Go to admin area
			</a>
		</div>

	</div>

	<div class="footer-bottom">
		<p>© {new Date().getFullYear()} Your Project. All rights reserved.</p>
	</div>
</footer>

<style>
	footer {
		background: linear-gradient(135deg, #0f172a, #1e293b);
		color: #e2e8f0;
		margin-top: 60px;
		box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.3);
	}

	.footer-container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 50px 24px;
		display: flex;
		justify-content: space-between;
		gap: 40px;
		flex-wrap: wrap;
	}

	.footer-section {
		flex: 1;
		min-width: 220px;
	}

	h2 {
		margin-bottom: 14px;
		font-size: 18px;
		font-weight: 700;
		color: #ffffff;
		letter-spacing: 0.6px;
	}

	a {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: #60a5fa;
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		padding: 6px 0;
		transition: all 0.25s ease;
	}

	a:hover {
		color: #ffffff;
		transform: translateX(6px);
	}

	.footer-bottom {
		text-align: center;
		padding: 18px;
		font-size: 13px;
		background: rgba(255, 255, 255, 0.05);
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		color: #94a3b8;
	}
</style>
