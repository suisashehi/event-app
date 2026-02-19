import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export async function load() {
	const [rows] = await pool.execute(`
		SELECT e.description,
		       e.id as id,
		       c.name as category_name,
		       e.name as name
		FROM event e
		LEFT JOIN categories c
		ON e.category_id = c.id
	`);

	return {
		pageTitle: "List of events",
		events: rows
	};
}

export const actions = {
	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		await pool.execute(
			'DELETE FROM event WHERE id = ?',
			[id]
		);

		throw redirect(303, '/admin/events');
	}
};
