const userService = require("../services/users.service");

class userController {
  static async create(req, res) {
    try {
      //Intenta crear usuario
      const user = await userService.create(req.body);
      if (user) {
        res.sendStatus(200);
      } else {
        res.sendStatus(500);
      }
    } catch (e) {
      //Si falla devuelve un 500
      res.sendStatus(500);
    }
  }

  static async get(req, res) {
    try {
      const user = await userService.get(req.params.id);
      if (user.length) {
        res.status(200).send(user[0]);
      } else {
        res.status(404).send("Usuario no encontrado");
      }
    } catch (e) {
      res.sendStatus(500);
    }
  }

  static async delete(req, res) {
    try {
      //Primero verifico que el user exista
      const user = await userService.get(req.params.id);
      //Poner aca abajo validacion con JWT
      if (user.length) {
        //El user existe
        const deleteUser = await userService.delete(req.params.id);
        if (deleteUser) {
          res.sendStatus(204);
        } else {
          res.sendStatus(417);
        }
      } else {
        res.status(404).send("Usuario no encontrado");
      }
    } catch (e) {
      res.sendStatus(500);
    }
  }

  static async update(req, res) {
    try {
      //Primero verifico que el user exista
      const user = await userService.get(req.params.id);
      if (user) {
        const updatedUser = await userService.update(req.body);
        if (updatedUser) {
          const user = await userService.get(req.params.id);
          res.status(200).send(user[0]);
        } else {
          res.sendStatus(417);
        }
      } else {
        res.status(404).send();
      }
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

module.exports = userController;
