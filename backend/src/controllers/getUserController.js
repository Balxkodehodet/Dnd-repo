import pool from '../database.js'

const getUser = async (req, res) =>  {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT id, username, email FROM users WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export default getUser;
