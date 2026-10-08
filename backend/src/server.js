import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generalUserRoute from "./routes/generalUserRoute.js";
import loginUserRoute from "./routes/loginUserRoute.js";
import session from 'express-session';
import logoutUserRoute from "./routes/logoutUser.js";
import meRoute from "./routes/meRoute.js";

dotenv.config();

const app = express();
const nodeEnv = process.env.NODE_ENV;
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
];

if (nodeEnv === "production") {
    app.set("trust proxy", 1);
}

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: 
    { 
        httpOnly: true,
        secure: nodeEnv === "production", // Set to true if production else false (development)
        sameSite: nodeEnv === "production" ? 'none' : 'lax' // Adjust based on your needs
    }    
}));
app.use("/api/", generalUserRoute);
app.use("/api/", loginUserRoute);
app.use("/api/", meRoute);
app.use("/api/", logoutUserRoute);

app.get("/", (req, res) => {
    res.json({ message: "Hello from the backend!" });
})

app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})
