import { Router } from "express";
import UserGroupsController from "../controllers/UserGroupsController";

const router = Router();

router.get("/", UserGroupsController.getAllUserGroups);
router.post("/", UserGroupsController.addUserGroup);
router.get("/:id", UserGroupsController.getAUserGroupById);
router.put("/:id", UserGroupsController.putAUser);
router.get("/login/:id", UserGroupsController.getAUserGroupByUserId);

// router.delete("/:id", UserGroupsController.deleteUser);


export default router;
