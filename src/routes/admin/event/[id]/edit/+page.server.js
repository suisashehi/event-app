import pool from '$lib/server/database.js';
import { redirect  } from '@sveltejs/kit';
 
export async function load({ params }) {
    const eventId = params.id;
    const [rows] = await pool.execute('SELECT * FROM event WHERE id = ?', [eventId]);
 
    if (rows.length === 0) {
        throw redirect(303, '/admin/events');
    }
 
    return {
        event: rows[0]
    };
}
    
export const actions = {
    edit: async ({ request, params }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const startdate = formData.get('startdate');
        const starttime = formData.get('starttime');
        const id = params.id;

        await pool.execute(
            'UPDATE event SET name = ?, description = ?, startdate = ?, starttime = ? WHERE id = ?',
            [name, description, startdate, starttime, id]
        );

         throw redirect(303, '/admin/events');
        
    }

};
