import Author from "../models/Author.js";
import Post from "../models/Post.js";

/**
 * Create Author
 */
export const createAuthor = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const author = await Author.create({ name, email });
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Get All Authors
 */
export const getAllAuthors = async (req, res) => {
  const authors = await Author.findAll();
  res.json(authors);
};

/**
 * Get Author by ID
 */
export const getAuthorById = async (req, res) => {
  const author = await Author.findByPk(req.params.id);

  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  res.json(author);
};

/**
 * Update Author
 */
export const updateAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);

  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  const { name, email } = req.body;
  await author.update({ name, email });

  res.json(author);
};

/**
 * Delete Author (CASCADE deletes posts)
 */
export const deleteAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);

  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  await author.destroy();
  res.json({ message: "Author deleted successfully" });
};

/**
 * ✅ STEP 6: Get All Posts of an Author
 * GET /authors/:id/posts
 */
export const getAuthorPosts = async (req, res) => {
  const authorId = req.params.id;

  const author = await Author.findByPk(authorId);
  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }

  const posts = await Post.findAll({
    where: { author_id: authorId }
  });

  res.json(posts);
};
