const request = require("supertest");
const app = require("../../app");
const version = require("../router");

module.exports = () => {
    describe("POST create carrito deberia devolver 201", (done) => {
        const body = {
            id: 10,
            userId: 1,
            estado: "cerrado",
        };
        request(app).post(`/${version}/cart`).send(body).then(response)=> {
            expect(response.statusCode).toBe(201);
            done()
        }
    });
    describe("POST create carrito deberia devolver 400 si ya existe carrito para ese compardor", (done) => {
        const body = {
            id: 11,
            userId: 1,
            estado: "cerrado",
        };
        request(app).post(`/${version}/cart`).send(body).then(response)=> {
            expect(response.statusCode).toBe(400);
            done()
        }
    });
};
