const Blog = require('../models/Blog');

// Create Blog Post
exports.createBlog = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;

    const blog = await Blog.create({
      title,
      content,
      author
    });

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

// Read All Blog Posts
exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'All blogs fetched successfully',
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    next(error);
  }
};

// Read Single Blog Post by ID
exports.getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog fetched successfully',
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

// Update Blog Post
exports.updateBlog = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: blog
    });
  } catch (error) {
    next(error);
  }
};

// Delete Blog Post
exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully',
      data: blog
    });
  } catch (error) {
    next(error);
  }
};
