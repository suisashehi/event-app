<script>
	import { page } from '$app/stores';
</script>

<nav class="admin-nav">
	<a
		href="/admin/events"
		class="nav-link"
		class:active={$page.url.pathname.startsWith('/admin/events')}
	>
		📅 Manage Events
	</a>

	<a
		href="/admin/categories"
		class="nav-link"
		class:active={$page.url.pathname.startsWith('/admin/categories')}
	>
		🏷 Manage Categories
	</a>
</nav>

<style>
	.admin-nav {
		display: flex;
		gap: 18px;
		padding: 18px 28px;
		background: #ffffff;
		border-bottom: 1px solid #f1f5f9;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
	}

	.nav-link {
		padding: 10px 18px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		font-size: 14px;
		color: #374151;
		background: #f9fafb;
		border: 1px solid transparent;
		transition: all 0.25s ease;
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.nav-link:hover {
		background: #2563eb;
		color: white;
		transform: translateY(-1px);
		box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
	}

	.nav-link.active {
		background: #2563eb;
		color: white;
		box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
	}
</style>
