const { query } = require('../repositories/main.repository');

class userDao {

  static login(user) {
    console.log(user)
    const sql = `SELECT role FROM User WHERE email = '${user[0]}' AND password = '${user[1]}'`;
    return query(sql);
  }
}

module.exports = userDao;
