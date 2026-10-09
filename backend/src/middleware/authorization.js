export default function authorization(req, res, next) {
    if (req.session.userId !== Number(req.params.id)) {
        return res.status(403).json({ error: "forbidden" });
    }
    next();
}