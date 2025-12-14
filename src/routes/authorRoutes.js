import express from "express";
import {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} from "../controllers/authorController.js";
import { getAuthorPosts } from "../controllers/authorController.js";

const router = express.Router();

router.post("/", createAuthor);
router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);
router.get("/:id/posts", getAuthorPosts);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);


export default router;
