const TryCatch = (handler) => {
    return async (req, res, next) => {
      try {
        await handler(req, res, next);
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    };
  };
  
  export default (fn) => (req, res, next) => {
    fn(req, res, next).catch((err) => {
      console.error("Error Caught by Middleware:", err); // Log the error
      res.status(500).json({ message: "An internal server error occurred." });
    });
  };
  