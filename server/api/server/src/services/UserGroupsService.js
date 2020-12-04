import db from "../../../../models/index.js";

//a service helps you interface with your model (database)
class UserGroupsService {
  static async getAllUserGroups() {
    try {
    //   console.log(db.UserGroups);
      return await db.UserGroups.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUserGroup(newUserGroup) {
    try {
      return await db.UserGroups.create(newUserGroup);
    } catch (error) {
      throw error;
    }
  }


  static async getAUserGroupById(id) {
    try {
      const group = await db.UserGroups.findOne({
        where: { userIdFK: Number(id) },
      });

      console.log(group);

      return group;
    } catch (error) {
      throw error;
    }
  }

}

export default UserGroupsService;
