const userDao = require("../dao/user.dao");

class userService {
  static async create(req, res) {
    //Intento crear , si SQL falla devuelvo un error
    let succes = false;
    try {
      await userDao.signUp(req.body);
      succes = true;
    } catch (e) {
      throw new Error(e);
    }
    return succes;
  }

  static async get(req, res) {
    let user = false;
    try {
      user = await userDao.get(req.params.id);
    } catch (e) {
      throw new Error(e);
    }
    return user;
  }

  static async delete(req, res) {
    let user = false;
    try {
      user = await userDao.delete(req.params.id);
    } catch (e) {
      throw new Error(e);
    }
    return user;
  }

  static async update(req, res) {
    let user = false;
    try {
      user = await userDao.update(
        req.params.id,
        req.body.email,
        req.body.userName,
        req.body.firstName,
        req.body.lastName,
        req.body.password,
        req.body.role
      );
    } catch (e) {
      throw new Error(e);
    }
    return user;
  }
}

module.exports = userService;
