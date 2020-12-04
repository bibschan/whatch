import GroupService from "./../services/GroupService.js";
import Util from "../utils/Utils";

const util = new Util();

class GroupController {
    static async getAllGroups(req,res) {
        // console.log("req" + req);
        try {
            const allGroups = await GroupService.getAllGroups();
            if(allGroups.length > 0) {
                util.setSuccess(200, "Groups Retrieved!", allGroups);
            } else {
                util.setSuccess(200, "No groups found");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async getAGroup(req,res) {
        const id = req.params.id;
        try {
            const group = await GroupService.getAGroup(id);
            if(group) {
                util.setSuccess(200, "Group Retrieved!", group);
            } else {
                util.setSuccess(200, "No group found");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async createGroup(req,res) {
        if (!req.body.groupName) {
            util.setError(400, "Please provide a groupName details");
            return util.send(res);
          }
        console.log(req);
        const groupInfo = req.body;
        
        try {
            // there's something wrong with the ID increment???
            const group = await GroupService.createGroup(groupInfo);
            if(group) {
                util.setSuccess(200, "Group Created!", group);
            } else {
                util.setSuccess(200, "Couldn't create group");
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    static async deleteGroup(req,res) {
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, "Please provide a numeric id value");
            return util.send(res);
          }

        try {
            const group = await GroupService.deleteGroup(id);
            if(group) {
                util.setSuccess(200, "Group Deleted!", group);
            } else {
                util.setSuccess(200, `Couldn't delete group with id ${id}`);
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
}
export default GroupController;