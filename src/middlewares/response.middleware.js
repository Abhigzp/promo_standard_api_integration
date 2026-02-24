module.exports = (req, res, next) => {
  res.success = (data) => {
    res.json({
      success: true,
      data
    });
  };

  res.error = (message) => {
    res.status(500).json({
      success: false,
      message
    });
  };

  next();
};