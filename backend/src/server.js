import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generalUserRoute from "./routes/generalUserRoute.js";
import loginUserRoute from "./routes/loginUserRoute.js";
import session from 'express-session';

dotenv.config();

const app = express();

app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: 
    { 
        httpOnly: true,
        secure: false, // Set to true if using HTTPS
        sameSite: 'lax' // Adjust based on your needs
    }    
}));
app.use(cors());
app.use("/api/", generalUserRoute);
app.use("/api/", loginUserRoute);

app.get("/", (req, res) => {
    res.json({ message: "Hello from the backend!" });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
