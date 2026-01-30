const express = require("express");
const router = express.Router();
const Newsletter = require("../models/Newsletter");

// GET all subscribers
router.get("/", async (req, res) => {
  try { const subscribers = await Newsletter.find(); res.json(subscribers); }
  catch (err) { res.status(500).json({ message: err.message }); }
});

// POST new subscriber
router.post("/", async (req, res) => {
  const { email } = req.body;
  const subscriber = new Newsletter({ email });
  try { const saved = await subscriber.save(); res.status(201).json(saved); }
  catch (err) { res.status(400).json({ message: err.message }); }
});

module.exports = router;
