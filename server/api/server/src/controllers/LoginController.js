import LoginService from "./../services/LoginService.js";
import Util from "../utils/Utils";

const util = new Util();

class LoginController {
    static async getUserByEmail(req, res) {
        const { email, password } = req.body;
        if (email == Number) {
          util.setError(400, "Please provide an email");
          return util.send(res);
        }
        try {
          const UserToReturn = await LoginService.UserToReturn(email, password);
    
          if (UserToReturn) {
            util.setSuccess(200, "User Returned", UserToReturn);
          } else {
            util.setError(404, `User with the provided email cannot be found`);
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error);
          return util.send(res);
        }
      }
}

export default LoginController;