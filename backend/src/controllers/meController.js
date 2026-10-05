import pool from '../database.js';

export async function getCurrentUser(req, res) {


    try {
        const userId = req.session.userId;

        const username = await pool.query(`SELECT username FROM users WHERE id = $1`, [userId]);
        console.log("Fetched username:", username.rows[0].username); // Log the fetched username
        console.log("Fetched username object:", username); // Log the entire result object
        if(!username.username)
        {
            return res.json({ isLoggedIn: false, error: "User not found" });
        }
        return res.json({ isLoggedIn: true, username: username.rows[0].username });

    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ isLoggedIn: false, error: "Internal Server Error" });
    }
}
getCurrentUser();