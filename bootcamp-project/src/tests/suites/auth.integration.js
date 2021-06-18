const request = require('supertest');
const app = require('../../../../app');
const { version } = require('../../../router');

module.exports = () => describe('post /v1/login', () => {
    // it('it should find existing user with 200 ', (done) => {
    //     const randomNumber = Math.floor(Math.random() * Math.floor(1000));
    //     const body = {
    //         password: '123',
    //         lastName: 'Gaona',
    //         email: `joaquin${randomNumber}@gmail.com`,
    //         firstName: 'Joaquin',
    //         userName: 'jco'
    //     };
    //     request(app)
    //         .post(`/${version}/users`)
    //         .send(body)
    //         .then((response) => {
    //             id = response.body.insertId;
    //             request(app)
    //                 .get(`/${version}/users/${id}`)
    //                 .then((response) => {
    //                     console.log(response.body, 'usuario encontrado')
    //                     expect(response.statusCode).toBe(200);
    //                     done();
    //                 });
    //         })
    // });

    // it('it should return 404 if user doesnt exist ', (done) => {

    //     request(app)
    //         .get(`/${version}/users/12345567890`)
    //         .then((response) => {
    //             expect(response.statusCode).toBe(404);
    //             done();
    //         });


    // });
});