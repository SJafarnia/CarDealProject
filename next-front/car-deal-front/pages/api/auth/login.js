
export default async function handler(req, res) {

    if (req.method === 'POST') {

        const { token } = req.body;
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (60 * 60 * 24 * 7));//7days

        res.setHeader("Set-Cookie", [`token=${token}; HttpOnly; Path=/;Expires=${expirationDate.toUTCString()};`])

        // Set the JWT token as a cookie
        // res.setHeader('Set-Cookie', serialize('token', token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        //     sameSite: 'strict',
        //     maxAge: 3600,
        //     path: '/',
        // }));

        res.status(200).json({ message: "set" });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}