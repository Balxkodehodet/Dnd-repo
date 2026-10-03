import pool from '../database.js'
import bcrypt from 'bcrypt';
import validator from 'validator';

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        const result = await pool.query("SELECT id, username, email, password FROM users WHERE email = $1", [email]);

        if (!result) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        const emailMatch = user.email === email;

        if (!isMatch || !emailMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.status(200).json({ id: user.id, username: user.username, email: user.email });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default loginUser;