const cartService = require("../services/cart.service");

class cartController {
    static async create(req, res) {
        const { userId } = req.body;

        if (typeof userId !== "string") {
            console.log("userId should be a string");
            return res.status(400).send();
        }
        try {
            console.log("envio exitoso");
            const result = await cartService.create(userId);
            return res.status(200).send(result);
        } catch (error) {
            console.log(error);

            if (error.error == "user_id_has_cart")
                return res.status(404).send("Usuario ya tiene carrito");

            return res.status(500).send(error);
        }
    }
    static async delete(req, res) {
        const cartId = req.params.idCarro;

        try {
            console.log("envio exitoso");
            const result = await cartService.delete(cartId);
            return res.status(200).send("carrito borrado");
        } catch (error) {
            console.log(error);

            if (error.error == "cart_id_not_found")
                return res.status(404).send("El carro no existe");
        }
    }

    static async update(req, res) {
        const cartId = req.params.idCarro;
        try {
            console.log("envio exitoso");
            const result = await cartService.update(cartId, "cerrado");
            return res.status(200).send("Carrito modificado");
        } catch (error) {
            console.log(error);
            if (error.error == "cart_id_not_found")
                return res.status(404).send("El carro no existe");
        }
    }
    static async getProducts(req, res) {
        const cartId = req.params.idCarro;
        try {
            console.log("envio exitoso");
            const result = await cartService.getProducts(cartId);
            return res.status(200).send("ok");
        } catch (erro) {
            console.log(error);
            if (error.error == "cart_id_not_found")
                return res.status(404).send("El carro no existe");
        }
    }

    static async addProduct(req, res) {
        const cartId = req.params.idCarro;
        const productId = req.params.idProducto;
        try {
            console.log("envio exitoso");
            const result = await cartService.addProduct(cartId, productId, 1);
            return res.status(200).send("producto agregado");
        } catch {
            console.log(error);
            if (error.error == "cart_id_not_found")
                return res.status(404).send("El carro no existe");
        }
    }

    static async deleteProduct(req, res) {
        const cartId = req.params.idCarro;
        const productId = req.params.idProducto;
        try {
            console.log("envio exitoso");
            const result = await cartService.deleteProduct(cartId, productId);
            return res.status(200).send("producto eliminado con exito");
        } catch (error) {
            console.log(error);
            if (error.error == "cart_id_not_found")
                return res.status(404).send("El carro no existe");
        }
    }
}
module.exports = cartController;
