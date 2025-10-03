const validateBlog = (req, res, next) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({
      success: false,
      message: 'Please provide title, content, and author'
    });
  }

  if (title.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: 'Title must be at least 3 characters long'
    });
  }

  if (content.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Content must be at least 10 characters long'
    });
  }

  next();
};

module.exports = validateBlog;
