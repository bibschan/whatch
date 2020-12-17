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


  static async getAUserGroupByUserId(id) {
    try {
      const group = await db.UserGroups.findAll({
        where: { userIdFK: Number(id) },
      });

      console.log(group);

      return group;
    } catch (error) {
      throw error;
    }
  }

  static async getAUserGroupById(id) {
    try {
      const group = await db.UserGroups.findAll({
        where: { groupIdFK: Number(id) },
      });

      console.log(group);

      return group;
    } catch (error) {
      throw error;
    }
  }

  static async putAUser(body) {
    // did not have time to fully implement this. I'll hard code some stuff for the sake of my demo
    try {
      const put = await db.UserGroups.findOne({
        where: { userIdFK: body.userIdFK },
      }).then(record => {

        if (!record) {
          throw new Error('No record found')
        } else {
          record.update({
            groupIdFK: body.groupIdFK,
            userIdFK: body.userIdFK
          })
        }
      }).catch(error =>console.log(error));

      console.log(put);

      return put;
    } catch (error) {
      throw error;
    }
  }

}

export default UserGroupsService;
