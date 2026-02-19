import pool from '$lib/server/database.js';
 
export async function load() {
    const [rows] = await pool.execute('SELECT e.description, e.id as id, c.name as category_name, e.name as name from event e LEFT JOIN categories c ON e.category_id = c.id');
 
    return {
        pageTitle: "List of events",
        event: rows
    };
}
 
 