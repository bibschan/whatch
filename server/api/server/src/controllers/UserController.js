import UserService from "./../services/UserService.js";
import Util from "../utils/Utils";

const util = new Util();

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(200, "Users retrieved", allUsers);
      } else {
        util.setSuccess(200, "No User found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await UserService.addUser(newUser);
      util.setSuccess(201, "User Added!", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateUser = await UserService.updateUser(id, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find User with the id: ${id}`);
      } else {
        util.setSuccess(200, "User updated", updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theUser = await UserService.getAUser(id);
      if (!theUser) {
        util.setError(404, `Cannot find User with the id ${id}`);
      } else {
        util.setSuccess(200, "Found User", theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric id value");
      return util.send(res);
    }

    try {
      const UserToDelete = await UserService.deleteUser(id);

      if (UserToDelete) {
        util.setSuccess(200, "User deleted");
      } else {
        util.setError(404, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  
  static async getUserByEmailForGroup(req, res) {    
    if (req.params.email == Number) {
      util.setError(400, "Please provide an email");
      return util.send(res);
    }
    try {
      const UserToReturn = await UserService.getUserByEmailForGroup(req.params.email);
      console.log(UserToReturn);
      if (UserToReturn) {
        util.setSuccess(200, "User Returned", UserToReturn);
      } else {
        util.setError(404, `User with the email cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, `User with the email cannot be found`, error);
      return util.send(res);
    }
  }
}

export default UserController;
