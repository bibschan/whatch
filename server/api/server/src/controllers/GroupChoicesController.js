import GroupChoicesService from "./../services/GroupChoicesService.js";
import Util from "../utils/Utils";

const util = new Util();

class GroupChoicesController {
    static async getAllChoices(req,res) {
        // console.log("req" + req);
        try {
            const choices = await GroupChoicesService.getAllChoices();
            if(choices.length > 0) {
                util.setSuccess(200, "Choices Retrieved!", choices);
            } else {
                util.setSuccess(200, "No choices found");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async getGroupChoices(req,res) {
        // const id = ;
        try {
            const group = await GroupChoicesService.getGroupChoices(req.params.id);
            if(group) {
                util.setSuccess(200, "Group Choices Retrieved!", group);
            } else {
                util.setSuccess(200, "No group Choices Found");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async createGroupChoice(req,res) {
        if (!req.body.groupIdFK || !req.body.movieId) {
            util.setError(400, "Please provide a movie and groupId");
            return util.send(res);
          }
        
        try {
            // there's something wrong with the ID increment???
            const group = await GroupChoicesService.createGroupChoice(req.body);
            if(group) {
                util.setSuccess(200, "Group Choice Created!", group);
            } else {
                util.setSuccess(200, "Couldn't create group choice");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async deleteChoice(req,res) {
        if (!req.params) {
            util.setError(400, "Please provide a movieId and groupId");
            return util.send(res);
          }
        try {
            const group = await GroupChoicesService.deleteChoice(req.params);
            if(group) {
                util.setSuccess(200, "Group Choice Deleted!", group);
            } else {
                util.setError(400, `Couldn't delete group choice`, error);
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
}
export default GroupChoicesController;