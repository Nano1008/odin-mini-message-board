const { Router } = require("express");
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// GET home page
router.get("/", (req, res) => {
  res.render("index", { messages });
});

// GET new message page
router.get("/new", (req, res) => {
  res.render("form");
});

// POST new message
router.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, added: new Date() });
  res.redirect("/");
});

// GET message by ID
router.get("/messages/:id", (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId];
  if (message) {
    res.render("message", { message });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = router;
