import pool from '../database.js'
import validator from 'validator';
import bcrypt from 'bcrypt';


const createUser = async (req, res) => {

    try {
        const { username, email, password } = req.body;

        username = username.trim();
        email = email.trim();    
        if(!username || !email || !password) {
            return res.status(400).json({ error: "Username, email, and password are required" }).send();
        }
        if(!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" }).send();
        }
        const regex = /^[a-zA-Z0-9_-]{1,20}$/
        if(!regex.test(username)) {
            return res.status(400).json({ error: "Username must be 1-20 characters long and can only contain letters, numbers, underscores, and hyphens" }).send();
        }
        
        const existingUser = await pool.query(`SELECT * FROM users WHERE username = $1 OR email = $2`, [username, email]);
        if (existingUser) {
            return res.status(400).json({ error: "Username or email already exists" }).send();
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
            [username, email, hashedPassword]
        );
        res.status(201).json({ message: "User created successfully"});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default createUser;