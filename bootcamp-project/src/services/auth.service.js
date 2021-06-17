const SECRET = 'SECRET'
// const jwt = require("jsonwebtoken");


class authService {

    static async signIn({ email, password }) {
        const exists = await userDao.exists(email, 'email')

        if (exists[0].exists === 0) {
            console.log('usuario no existe')
            throw { error: 'invalid_login', msg: 'No es posible realizar el login' }
        }
        if (password !== '1234') {
            console.log('password equivocada')
            throw { error: 'invalid_login', msg: 'No es posible realizar el login' }
        }

        console.log('email y password correctos')
        //pasar la secret key a un .env
        const payload = { check: 'true', role: 'admin' }
        const token = jwt.sign(payload, SECRET, { expiresIn: 60 * 60 });
        console.log(token)

        return { msg: 'Login correcto', token }
    }

}

module.exports = authService