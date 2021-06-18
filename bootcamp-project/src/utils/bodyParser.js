const user = {
  bodyCheck(req, res, next) {
    const { userName, firstName, lastName, email, password, role } = req.body;

    if (!userName || typeof userName != "string") {
      res.status(400).send("Username not found or wrong type");
    }
    if (!firstName || typeof firstName != "string") {
      res.status(400).send("firstName not found or wrong type");
    }
    if (!lastName || typeof lastName != "string") {
      res.status(400).send("lastName not found or wrong type");
    }
    if (!email || typeof email != "string") {
      res.status(400).send("email not found or wrong type");
    }
    if (!password || typeof password != "string") {
      res.status(400).send("password not found or wrong type");
    }
    if (!role || typeof role != "string") {
      res.status(400).send("role not found or wrong type");
    }

    next();
  },
  idCheck(req, res, next) {
    const id = req.params.id;
    const reg = /^\d+$/;
    if (!reg.test(id)) {
      //Chequeo que no contenga letras
      res.status(400).send("El ID solo puede contener numeros");
    }
    if (id <= 0) {
      res.status(400).send("El ID no puede ser negativo");
    }
    next();
  },
};

module.exports = user;
