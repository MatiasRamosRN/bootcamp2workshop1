const cartDao = require("../dao/cart.dao");
const { cartStatusChange } = require("../utils/sqs");

class cartService {
    static async create(userId) {
        const result = await cartDao.exists(userId, "userId");
        const exists = result[0].exists;
        if (exists > 0)
            throw { error: "user_id_has_cart", msg: "User already has a cart" };
        return cartDao.create(userId);
    }

    static async delete(cartId) {
        const result = await cartDao.exists(cartId, "id");
        const exists = result[0].exists;
        if (exists == 0)
            throw { error: "cart_id_not_found", msg: "Cart does not exist" };
        return cartDao.delete(cartId);
    }
    static async update(cartId, estado) {
        const result = await cartDao.exists(cartId, "id");
        const exists = result[0].exists;
        cartStatusChange({ date: "hoy", id: "1", cantidad: "5" });
        if (exists == 0)
            throw { error: "cart_id_not_found", msg: "Cart does not exist" };
        return cartDao.update(cartId, estado);
    }
    static async getProducts(cartId) {
        const result = await cartDao.getProducts(cartId);
        if (exists == 0)
            throw { error: "cart_id_not_found", msg: "Cart does not exist" };
        return cartDao.getProducts(cartId);
    }
    static async addProduct(cartId, productId, qty) {
        const result = await cartDao.exists(cartId, "id");
        const exists = result[0].exists;
        if (exists == 0)
            throw { error: "cart_id_not_found", msg: "Cart does not exist" };
        return cartDao.getProducts(cartId, productId, qty);
    }
    static async deleteProduct(cartId, productId) {
        const result = await cartDao.exists(cartId, "id");
        const exists = result[0].exists;
        if (exists == 0)
            throw { error: "cart_id_not_found", msg: "Cart does not exist" };
        return cartDao.deleteProduct(cartId, productId);
    }
}

module.exports = cartService;
