const productoService = require('../services/prodcuts.service')

class productsController {
    static async get(req, res){
        const { id } = req.params;
        try {
            const producto = await productoService.get(id);
            return res.status(200).json(producto);
        } catch (error) {
            console.log("Error en ProductoController get");
            const status = error.status;
            if (status === undefined) return res.status(500).send();
            return res.status(status).send(error);
        }
    }
    static async getAll(req, res){
        try {
            const productos = await productoService.getAll();
            return res.status(200).json(productos);
        } catch (error) {
            console.log("Error en ProductoController get");
            const status = error.status;
            if (status === undefined) return res.status(500).send();
            return res.status(status).send(error);
        }
    }

    static async post(req, res) {
        const { categoria, nombre, cantidad, descripcion } = req.body
        if (
            typeof categoria !== "string" ||
            typeof nombre !== "string" ||
            typeof cantidad !== "number" ||
            typeof descripcion !== "string"
        ) {
            console.log("Parametro type diferente");
            return res.status(400).send();
        }
        try {
            const producto = await productoService.post( categoria, nombre, cantidad, descripcion)
            return res.status(201).json(producto);
        } catch (error) {
            console.log("Error en ProductoController post");
            const status = error.status;
            if (status === undefined) return res.status(500).send();
            return res.status(status).send(error);
        }
    }
    static async put(req, res) {
        const {id} = req.params;
        const { categoria, nombre, cantidad, descripcion } = req.body
        if (
            typeof categoria !== "string" ||
            typeof nombre !== "string" ||
            typeof cantidad !== "number" ||
            typeof descripcion !== "string"
        ) {
            console.log("Parametro type diferente");
            return res.status(400).send();
        }
        try {
            const producto = await productoService.put(id, categoria, nombre, cantidad, descripcion)
            return res.status(200).send(producto);    
        } catch (error) {
            console.log("Error en ProductoController put", error);
            const status = error.status;
            if (status === undefined) return res.status(500).send();
            return res.status(status).send(error);
        }
    }
    static async delete(req, res) {
        const { id } = req.params;
        try {
            const producto = await productoService.delete(id)
            return res.status(200).send(producto);
        } catch (error) {
            console.log("Error en PrrductoController delete", error);
            const status = error.status;
            if (status === undefined) return res.status(500).send();
            return res.status(status).send(error);
        }
    }

}
module.exports = productsController