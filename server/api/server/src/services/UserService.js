import db from "../../../../models/index.js";

//a service helps you interface with your model (database)
class UserService {
  static async getAllUsers() {
    try {
      // console.log(db.Users);
      return await db.Users.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await db.Users.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const UserToUpdate = await db.Users.findOne({
        where: { id: Number(id) },
      });

      if (UserToUpdate) {
        await db.Users.update(updateUser, { where: { id: Number(id) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(id) {
    try {
      const theUser = await db.Users.findOne({
        where: { id: Number(id) },
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async getUserByEmailForGroup(email){
    try {
      //console.log(email);
      const theUser = await db.Users.findOne({
        where: { email: email }
      });
     
      if(theUser !== null) {
        return theUser;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }


  static async deleteUser(id) {
    try {
      const UserToDelete = await db.Users.findOne({
        where: { id: Number(id) },
      });

      if (UserToDelete) {
        const deletedUser = await db.Users.destroy({
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

export default UserService;
