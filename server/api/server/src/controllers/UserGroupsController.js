import UserGroupsService from "./../services/UserGroupsService.js";
import Util from "../utils/Utils";

const util = new Util();

class UserGroupsController {
  static async getAllUserGroups(req, res) {
    try {
      const allUsers = await UserGroupsService.getAllUserGroups();
      if (allUsers.length > 0) {
        util.setSuccess(200, "UserGroups retrieved", allUsers);
      } else {
        util.setSuccess(200, "No UserGroups found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUserGroup(req, res) {
    if (!req.body.groupIdFK || !req.body.userIdFK) {
      util.setError(400, "Please provide a groupIdFK and userIdFK");
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await UserGroupsService.addUserGroup(newUser);
      util.setSuccess(201, "UserGroup Added!", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  
  static async getAUserGroupByUserId(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a valid userIdFK value");
      return util.send(res);
    }

    try {
      const group = await UserGroupsService.getAUserGroupByUserId(id);
      if (!group) {
        util.setError(404, `User with userIdFK ${id} doesn't exist`);
      } else {
        util.setSuccess(200, "Found user", group);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUserGroupById(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a valid groupIdFK value");
      return util.send(res);
    }

    try {
      const group = await UserGroupsService.getAUserGroupById(id);
      if (!group) {
        util.setError(404, `Group containing groupIdFK ${id} doesn't exist`);
      } else {
        util.setSuccess(200, "Found UserGroup", group);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async putAUser(req, res) {
    const { id } = req.params;

    try {
      const put = await UserGroupsService.putAUser(req.body);
      if (!put) {
        util.setError(404, `Couldn't update ${id}`);
      } else {
        util.setSuccess(200, "Updated UserGroup!", put);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default UserGroupsController;
