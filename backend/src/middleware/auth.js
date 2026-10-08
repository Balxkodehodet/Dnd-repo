export default function authMiddleware(req, res, next) {
  console.log("=== AUTH MIDDLEWARE ===");
    console.log("Session ID:", req.sessionID);
    console.log("User ID:", req.session?.userId);
    console.log("Session:", req.session);
    if (!req.session.userId) {
        console.log("=== AUTH MIDDLEWARE ===");
        console.log("Session ID:", req.sessionID);
        console.log("User ID:", req.session?.userId);
        console.log("Session:", req.session);
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
}    