const request = require('supertest');
const app = require('../../../../app');
const { version } = require('../../../router');

module.exports = () => describe('post /v1/login', () => {
    it('it should find existing user with 200 ', (done) => {
        const body = {
            password: '123456',
            email: `prueba1@prueba.com`,
        };
        request(app)
            .post(`/${version}/login`)
            .send(body)
            .then((response) => {
                console.log(response.body, 'usuario encontrado')
                expect(response.statusCode).toBe(200);
                done();
            });

    });

    it('it should return 404 if user doesnt exist ', (done) => {

        request(app)
            .post(`/${version}/login`)
            .send({ email: 'nada', password: 'nada' })
            .then((response) => {
                expect(response.statusCode).toBe(404);
                done();
            });


    });
});