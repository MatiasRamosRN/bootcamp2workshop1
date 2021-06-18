const jwt = require('jsonwebtoken')
const { next } = require('xid-js')
const userDao = require('../dao/auth.dao')
const SECRET = 'SECRET'
class authService {

    static async signIn({ email, password }) {


        const user = await userDao.login([email, password])

        if (user[0] == null) {
            throw { type: 'invalid_login' }
        }

        const payload = { check: 'true', role: user[0].role }

        const token = jwt.sign(payload, SECRET, { expiresIn: 60 * 60 });
        return { msg: 'Login correcto', token }
    }

}

module.exports = authService