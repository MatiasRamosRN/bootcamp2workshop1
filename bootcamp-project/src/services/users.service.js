const userDao = require("../dao/user.dao");

class userService {
  static async create(user) {
    //Intento crear , si SQL falla devuelvo un error
    let succes = false;
    const userData = [
      user.userName,
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.role,
    ];
    try {
      await userDao.signUp(userData);
      succes = true;
    } catch (e) {
      throw new Error(e);
    }
    return succes;
  }

  static async get(id) {
    try {
      return await userDao.get(id);
    } catch (e) {
      throw new Error(e);
    }
  }

  static async delete(id) {
    let user = false;
    try {
      user = await userDao.delete(id);
    } catch (e) {
      throw new Error(e);
    }
    return user;
  }

  static async update(user) {
    let userUpdate = false;
    try {
      userUpdate = await userDao.update(
        user.id,
        user.email,
        user.userName,
        user.firstName,
        user.lastName,
        user.password,
        user.role
      );
    } catch (e) {
      console.log("Error service", e);
      throw new Error(e);
    }
    return userUpdate;
  }
}

module.exports = userService;
