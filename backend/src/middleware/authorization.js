export default function authorization(req, res, next) {
    if (req.session.userId !== req.params.id) {
        return res.status(403).json({ error: "forbidden" });
    }
    next();
}