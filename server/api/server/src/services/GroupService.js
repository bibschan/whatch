import db from "../../../../models/index.js";

class GroupService {
    static async getAllGroups() {
        try {
            console.log(db.Groups);
            return await db.Groups.findAll();
          } catch (error) {
            throw error;
          }
    }
    static async getAGroup(id) {
        try {
          console.log(id);
            const group = await db.Groups.findOne({
                where: { id: Number(id) },
               
              });
              return group;
          } catch (error) {
            throw error;
          }
    }
    static async createGroup(groupInfo) {
        try {
            const group = await db.Groups.create(groupInfo);
              return group;
          } catch (error) {
            throw error;
          }
    }
    static async deleteGroup(id) {
        try {
            const UserToDelete = await db.Groups.findOne({
              where: { id: Number(id) },
            });
      
            if (UserToDelete) {
              const deletedUser = await db.Groups.destroy({
                where: { id: Number(id) },
              });
              return deletedUser;
            }
            return null;
          } catch (error) {
            throw error;
          }
    }
}
export default GroupService;