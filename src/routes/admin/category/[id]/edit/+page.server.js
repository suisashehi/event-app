import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const [rows] = await pool.execute(
		'SELECT * FROM categories WHERE id = ?',
		[params.id]
	);

	if (rows.length === 0) {
		throw redirect(303, '/admin/categories');
	}

	return {
		category: rows[0]
	};
}

export const actions = {
	edit: async ({ request, params }) => {
		const formData = await request.formData();
		const name = formData.get('name');

		await pool.execute(
			'UPDATE categories SET name = ? WHERE id = ?',
			[name, params.id]
		);

		throw redirect(303, '/admin/categories');
	}
};
