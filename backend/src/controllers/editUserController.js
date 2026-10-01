import pool from '../database.js'
import bcrypt from 'bcrypt';

const editUser = async (req, res) => {

    try {
        const {id} = req.params;
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING id, username, email",
            [username, email, hashedPassword, id]
        );
        if(result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error editing user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default editUser;