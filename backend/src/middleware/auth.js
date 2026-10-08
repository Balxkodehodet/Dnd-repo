export default function authMiddleware(req, res, next) {
    console.log("SESSION:", req.session);
    console.log("USER ID:", req.session?.userId);
    if (!req.session.userId) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
}    