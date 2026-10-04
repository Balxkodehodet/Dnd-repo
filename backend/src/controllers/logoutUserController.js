export async function logoutUser(req, res) {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.error("Error logging out user:", err);
                return res.status(500).json({ error: "Internal server error" });
            }
            return res.json({ message: "Logout successful" });
        });
    } catch (error) {
        console.error("Error logging out user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}