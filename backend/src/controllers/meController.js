import pool from '../database.js';

export default async function getCurrentUser(req, res) {


    try {
        const userId = req.session.userId;

        const username = await pool.query(`SELECT username FROM users WHERE id = $1`, [userId]);
        if(!username.rows[0])
        {
            return res.json({ isLoggedIn: false, error: "User not found" });
        }
        return res.json({ isLoggedIn: true, username: username.rows[0].username });

    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ isLoggedIn: false, error: "Internal Server Error" });
    }
}
