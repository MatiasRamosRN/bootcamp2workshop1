const productoDao = require('../dao/products.dao')
 
class productoService {
    static async get(id){
        const [producto] = await productoDao.get(id)
        return producto
    };

    static async getAll(){
        const productos = await productoDao.getAll()
        return productos;
    };

    static async post(categoria, nombre, cantidad, descripcion) {
        const body = [categoria, nombre, cantidad, descripcion]
        const data =  await productoDao.post(body)
        const [producto] = await productoDao.get(data.insertId)
        return producto;
    };

    static async put(id, categoria, nombre, cantidad, descripcion){
        const [exists] = await productoDao.get(id)
        console.log(' Exists',exists)
        if(!exists.id){
            throw {
                error: 'product_not_found',
                msg: 'Producto no encontrado'
            }
        }
        
         await productoDao.put(id, categoria,nombre,cantidad,descripcion)
         const [producto] =await productoDao.get(id)
        return producto;
    };

    static async delete(id) {
        const [exists] = await productoDao.get(id)
        if( !exists.id){
            throw {
                error: 'product_not_found',
                msg: 'Producto no encontrado'
            }
        }
         await productoDao.delete(id)
        return exists;
    }
}
module.exports = productoService