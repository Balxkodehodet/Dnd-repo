export default async function logoutUser(req, res) {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.error("Error logging out user:", err);
                return res.status(500).json({ error: "Internal server error" });
            }
        res.clearCookie("connect.sid", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite:
                process.env.NODE_ENV === "production"
                    ? "none"
                    : "lax",
            path: "/"
        });
            return res.json({ isLoggedIn: false, message: "Logout successful" });
        });
    } catch (error) {
        console.error("Error logging out user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}