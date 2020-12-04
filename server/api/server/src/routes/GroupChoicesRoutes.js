import GroupChoicesController from "../controllers/GroupChoicesController.js";
import { Router } from "express";


const router = Router();

router.get("/", GroupChoicesController.getAllChoices);
router.get("/:id", GroupChoicesController.getGroupChoices);
router.post("/", GroupChoicesController.createGroupChoice);
router.delete("/:groupIdFK/:movieId", GroupChoicesController.deleteChoice);

export default router;
