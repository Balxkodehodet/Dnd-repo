import pool from "../database.js";
export default async function test() {
        const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [1]);

        console.log("Fetched user:", result.rows[0]); // Log the fetched user
}

test();