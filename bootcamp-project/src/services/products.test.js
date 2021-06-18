
const productoDao = require('../dao/products.dao');
const productoService = require('./prodcuts.service');

jest.mock('../dao/products.dao')

describe('ProductsService test', () => {
    describe('Describe Product GET', () => {
        it('Devuelve 404 si el producto no existe', async () => {
            const mock = [{ exists : 0}];
            const resultError = {
                error: 'product_not_found',
                msg: 'Producto no encontrado'
            }
            productoDao.get.mockImplementationOnce(() => mock)
            try {
                await productoService.get()
            } catch (error) {
                expect(error).toEqual(resultError)
            }
        });
        it('Devuelve un Producto si existe', async () =>{
            const mock = [{
                id: '1',
                categoria: 'Frutas',
                nombre: 'Frutilla',
                cantidad: '100',
                descripcion: 'sin descripcion',
                createdAt: '2021-06-03T16:27:20.000Z'
            }];
            const mock2 = [{exists : 1}];
            productoDao.exists.mockImplementationOnce(() => mock2);
            productoDao.get.mockImplementationOnce(() => mock) 
            const result = await productoService.get()
            expect(result).toEqual(mock)
        });
    });

    describe('Describe Product Update', () => {
        it('Devuelve 404 si el producto no existe', async () => {
            const mock = [{ exists : 0}];
            const resultError = {
                error: 'product_not_found',
                msg: 'Producto no encontrado'
            }
            productoDao.get.mockImplementationOnce(() => mock)
            try {
                await productoService.put()
            } catch (error) {
                expect(error).toEqual(resultError)
            }
        });
        it('Devuelve succeed 200', async () => {
            const mock = [{exists: 1}];

            productoDao.get.mockImplementationOnce(() => mock);
            productoDao.put.mockImplementationOnce(() => 0);

            const result = await productoService.put('1','lacteos','leche','50','descremada');
            expect(result).toEqual(0)
        });
    });
    describe('Describe Product Delete', () => {
        it('Devuelve 404 si el producto no existe', async () => {
            const mock = [{ exists : 0}];
            const resultError = {
                error: 'product_not_found',
                msg: 'Producto no encontrado'
            }
            productoDao.get.mockImplementationOnce(() => mock)
            try {
                await productoService.delete()
            } catch (error) {
                expect(error).toEqual(resultError)
            }
        });
        it('Devuelve succeed 200 y borra el Producto', async () =>{
            const mock = [{exists: 1}];

            productoDao.get.mockImplementationOnce(() => mock)
            productoDao.delete.mockImplementationOnce(() => 0)

            const result = await productoService.delete();
            expect(result).toEqual(0);
        })
    })
});