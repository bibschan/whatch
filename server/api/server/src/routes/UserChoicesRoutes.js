import { Router } from "express";
import UserChoicesController from "../controllers/UserChoicesController";

const router = Router();

router.get("/", UserChoicesController.getAllUserChoices);
router.post("/", UserChoicesController.createUserChoice);
router.get("/:id", UserChoicesController.getUserChoices);
// router.get("/", UserChoicesController.getGroupChoices);
// router.get("/:id/:id", UserChoicesController.triggerForMovieGroupMatch);
router.delete("/:id", UserChoicesController.deleteChoice);
// router.post("/login", UserChoicesController.getUserByEmail);

export default router;
