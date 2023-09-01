export default async function handler(req, res) {
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    res.status(200).json({ ip: ipAddress });
}