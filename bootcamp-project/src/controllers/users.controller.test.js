const userController = require("./users.controller");
const userService = require("../services/users.service.js");

jest.mock("../services/users.service.js");

let sendMock;
let statusMock;
let res;

beforeEach(() => {
  sendMock = jest.fn();
  statusMock = jest.fn();
  res = { status: statusMock, sendStatus: statusMock, send: sendMock };
  statusMock.mockImplementation(() => res);
});

describe("User Controller", () => {
  describe("Create method", () => {
    it("should fail with 500 if a parameter is missing", async () => {
      const req = {
        body: {
          password: "password",
          fistName: "fistName",
          lastName: "lastName",
          userName: "userName",
          role: "user",
        },
      };

      await userController.create(req, res);
      expect(statusMock).toBeCalledWith(500);
    });

    it("should pass with 200 and create user", async () => {
      const req = {
        body: {
          email: "email@test.com",
          password: "password",
          firstName: "firstName",
          lastName: "lastName",
          userName: "userName",
          role: "user",
        },
      };
      const mock = {};
      userService.create.mockImplementationOnce(() => mock);

      await userController.create(req, res);
      expect(statusMock).toBeCalledWith(200);
    });
  });
  describe("Get method", () => {
    it("should fail with 404 user not found", async () => {
      const req = {
        params: { id: "-1" },
      };

      const mock = {};
      userService.get.mockImplementationOnce(() => mock);

      await userController.get(req, res);
      expect(statusMock).toBeCalledWith(404);
    });

    it("should pass with 200 and get user", async () => {
      const req = {
        params: { id: "1" },
      };

      const mock = [
        {
          id: "1",
          userName: "userName",
          email: "email@email.com",
          lastName: "lastName",
          firstName: "firstName",
          role: "user",
          createdAt: "2020-06-17T22:30:00.000Z",
        },
      ];

      userService.get.mockImplementationOnce(() => mock);

      await userController.get(req, res);
      expect(statusMock).toBeCalledWith(200);
    });
  });
  describe("Delete method", () => {});
  describe("Update method", () => {});
});
