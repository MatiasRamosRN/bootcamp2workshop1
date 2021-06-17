const userService = require("../services/users.service");

class userController {
  static async create(req, res) {
    try {
      //Intenta crear usuario
      const user = await userService.create;
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
      const user = await userService.get;
      if (user) {
        res.status(200).send(user);
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
      const user = await userService.get;
      if (user) {
        //El user existe
        const deleteUser = await userService.delete;
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
      const user = await userService.get;
      if (user) {
        //El user existe
        const updatedUser = await userService.update;
        if (updatedUser) {
          res.status(200).send(updatedUser);
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
}

module.exports = userController;
