const router = require("express").Router();

const blogRoutes = require("./blog.routes");
const contactFormRoutes = require("./contactForm.routes");
const realtyRoutes = require("./realty.routes");
const todoRoutes = require("./todo.routes");
const triviaRoutes = require("./trivia.routes");
const weatherRoutes = require("./weather.routes");

module.exports = router;

router.use("/api/blog", blogRoutes);
router.use("/api/contactForm", contactFormRoutes);
router.use("/api/realty", realtyRoutes);
router.use("/api/todo", todoRoutes);
router.use("/api/trivia", triviaRoutes);
router.use("/api/weather", weatherRoutes);

// API error handlers (API routes must be registered before this)
useAPIErrorHandlers(router);

// register client routes

function useAPIErrorHandlers(router) {
  // Handle API 404
  router.use("/api/*", (req, res, next) => {
    res.status(404).send({ message: "Not found" });
  });

  // Handle API 500
  router.use((err, req, res, next) => {
    // If the error object doesn't exists
    if (!err) {
      return next();
    }

    // Log it
    console.error(err.stack);

    // Redirect to error page
    res.sendStatus(500);
  });
}
