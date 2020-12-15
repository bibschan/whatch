import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUser);
router.get("/:id", UserController.getAUser);
router.put("/:id", UserController.updatedUser);
router.delete("/:id", UserController.deleteUser);
router.post('/:email',UserController.getUserByEmailForGroup);
router.post("/login", UserController.getUserByEmail);

export default router;
