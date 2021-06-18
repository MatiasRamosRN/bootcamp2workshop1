const authDao = require('../dao/auth.dao');
const authService = require('./auth.service');

jest.mock('../dao/auth.dao')

describe('AuthService test', () => {

    describe('Describe  login', () => {

        it('Devuelve 404 si el usuario no existe', async () => {
            const mock = [];
            const resultError = { type: 'invalid_login' }
            authDao.login.mockImplementationOnce(() => mock)
            try {
                await authService.signIn({ email: 'prueba', password: '12' })
            } catch (error) {
                expect(error).toEqual(resultError)
            }
        });
        it('Devuelve un login correcto si el usuario existe', async () => {
            const mock = [{ role: 'admin' }];

            authDao.login.mockImplementationOnce(() => mock)
            const result = await authService.signIn({ email: 'prueba', password: '12' })
            expect(result).toHaveProperty('msg', 'Login correcto')
        });
    });
});