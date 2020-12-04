import GroupController from "./../controllers/GroupController.js";
import { Router } from "express";


const router = Router();

router.get("/", GroupController.getAllGroups);
router.get("/:id", GroupController.getAGroup);
router.post("/", GroupController.createGroup);
router.delete("/:id", GroupController.deleteGroup);

export default router;
