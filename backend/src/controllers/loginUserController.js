import pool from '../database.js'
import bcrypt from 'bcrypt';
import validator from 'validator';

const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        email = email.trim();

        if(!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        const result = await pool.query("SELECT id, username, email, passwordhash FROM users WHERE email = $1", [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.passwordhash);
        const emailMatch = user.email === email;

        if (!isMatch || !emailMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        req.session.userId = user.id;
        return res.status(200).json({ username: user.username, email: user.email, message: "Login successful" });
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default loginUser;