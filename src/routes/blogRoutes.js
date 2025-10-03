const express = require('express');
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');
const validateBlog = require('../middlewares/validateBlog');

// Create Blog Post
router.post('/create', validateBlog, createBlog);

// Read All Blog Posts
router.get('/', getAllBlogs);

// Read Single Blog Post by ID
router.get('/:id', getBlogById);

// Update Blog Post
router.put('/update/:id', updateBlog);

// Delete Blog Post
router.delete('/delete/:id', deleteBlog);

module.exports = router;