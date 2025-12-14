import Post from "../models/Post.js";
import Author from "../models/Author.js";

/**
 * Create a post (author must exist)
 */
export const createPost = async (req, res) => {
  try {
    const { title, content, author_id } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const author = await Author.findByPk(author_id);
    if (!author) {
      return res.status(400).json({ error: "Author does not exist" });
    }

    const post = await Post.create({ title, content, author_id });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Get all posts (optional filter by author_id)
 */
export const getAllPosts = async (req, res) => {
  const { author_id } = req.query;

  const where = author_id ? { author_id } : {};

  const posts = await Post.findAll({
    where,
    include: {
      model: Author,
      attributes: ["name", "email"]
    }
  });

  res.json(posts);
};

/**
 * Get post by ID with author info
 */
export const getPostById = async (req, res) => {
  const post = await Post.findByPk(req.params.id, {
    include: {
      model: Author,
      attributes: ["name", "email"]
    }
  });

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
};

/**
 * Update post
 */
export const updatePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  const { title, content } = req.body;
  await post.update({ title, content });

  res.json(post);
};

/**
 * Delete post
 */
export const deletePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  await post.destroy();
  res.json({ message: "Post deleted successfully" });
};
