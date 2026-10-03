import express from "express";
import cors from "cors";
import "dotenv/config";
import generalUserRoute from "./routes/generalUserRoute.js";
import loginUserRoute from "./routes/loginUserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/", generalUserRoute);
app.use("/api/", loginUserRoute);

app.get("/", (req, res) => {
    res.json({ message: "Hello from the backend!" });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
