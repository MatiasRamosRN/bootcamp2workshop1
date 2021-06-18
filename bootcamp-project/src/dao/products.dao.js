const { query } = require('../repositories/main.repository');

class productoDao {
    static getAll() {
        const sql = `SELECT * FROM Producto`
        return query(sql)
    }

    static get(id) {
        console.log('llegue al dao' , id)
        const sql = `SELECT * FROM Producto WHERE id = ?`
        return query(sql, id) ;
    }

    static post(producto) {
        const sql = `INSERT INTO Producto (categoria, nombre, cantidad, descripcion) values (?, ?, ?, ?)`
        return query(sql, producto);
    }

    static put(id, categoria, nombre, cantidad, descripcion) {
        const sql = `UPDATE Producto SET categoria = ?, nombre = ?, cantidad = ?, descripcion = ? WHERE id = ?`
        return query(sql, [categoria, nombre, cantidad, descripcion, id]);
    }

    static delete(id) {
        const sql = `DELETE from Producto WHERE id = ?`
        return  query(sql, id);
    }
}
module.exports = productoDao
