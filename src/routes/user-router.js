import { Router } from "express";
import {
  register,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateCoverImage,
} from "../controllers/user-controller.js";
import { upload } from "../middlewares/multer-middleware.js";
import { verifyToken } from "../middlewares/auth-middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  register,
);

router.route("/login").post(loginUser);
router.route("/logout").post(verifyToken, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyToken, changeCurrentPassword);

// get current user details
router.route("/get-user").post(verifyToken, getCurrentUser);

//update user info
router.route("/update-user").post(verifyToken, updateAccountDetails);

//update user avatar and cover image
router
  .route("/update-user-avatar")
  .post(upload.single("avatar"), verifyToken, updateUserAvatar);
router
  .route("/update-cover-image")
  .post(upload.single("coverImage"), verifyToken, updateCoverImage);

export default router;
