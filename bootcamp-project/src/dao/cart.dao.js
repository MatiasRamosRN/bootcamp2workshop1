const { query } = require("../repositories/main.repository");

class cartDao {
    static create(cart) {
        const createCartQuery = `INSERT INTO Carro (userId)
        values (?)`;
        return query(createCartQuery, cart);
    }
    static exists(value, field) {
        const sql = `SELECT COUNT(*) AS 'exists' FROM Carro WHERE ${field} =  ?`;

        return query(sql, value);
    }
    static delete(cartId) {
        const sql = `DELETE FROM Carro WHERE id = ?`;
        return query(sql, cartId);
    }
    static update(cartId, estado) {
        const sql = `UPDATE Carro SET estado = ? WHERE id = ?`;
        return query(sql, [estado, cartId]);
    }
    static getProducts(cartId) {
        const sql = `SELECT * FROM Carro WHERE id = ?`;
    }

    static addProduct(cartId, productId, qty) {
        const sql = `INSERT INTO Products_cart (cartId, productId, qty) values (?, ?, ?)`;
        return query(sql, [cartId, productId, qty]);
    }

    static deleteProduct(cartId, productId) {
        const sql = `DELETE FROM Products_cart WHERE cartId = ? AND productId = ?`;
        return query(sql, [cartId, productId]);
    }
}

module.exports = cartDao;
