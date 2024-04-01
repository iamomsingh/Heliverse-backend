import { Router } from "express";
import {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";

const router = Router();

router.route("/").get(getAllUsers).post(createNewUser);
router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

export default router;
