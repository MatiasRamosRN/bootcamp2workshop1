const authService = require('../services/auth.service');
class authController {
    static async signIn(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send('Faltan parametros necesarios');
        }
        try {
            const result = await authService.signIn({ email, password })
            return res.status(200).send(result)
        } catch (error) {
            let status = 500
            if (error.type == 'invalid_login') {
                status = 401
            }
            return res.status(status).send(error);
        }
    }
}
module.exports = authController