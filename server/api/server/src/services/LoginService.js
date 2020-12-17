import db from "../../../../models/index.js";

//a service helps you interface with your model (database)
class LoginService {
    static async UserToReturn(email, password) {
        try {
          const theUser = await db.Users.findOne({
            where: { email: email, password: password },
          });
    
          return theUser;
        } catch (error) {
          throw error;
        }
      }
}

export default LoginService;