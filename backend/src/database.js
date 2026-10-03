import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL_POOLED,
});

pool.query("SELECT NOW()")
  .then(result => {
    console.log("Connected to Neon:", result.rows);
  })
  .catch(error => {
    console.error("Database error:", error);
  });

export default pool;