const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// GET all contacts
router.get("/", async (req, res) => {
  try { const contacts = await Contact.find(); res.json(contacts); }
  catch (err) { res.status(500).json({ message: err.message }); }
});

// POST new contact
router.post("/", async (req, res) => {
  const { fullName, email, mobile, city } = req.body;
  const contact = new Contact({ fullName, email, mobile, city });
  try { const saved = await contact.save(); res.status(201).json(saved); }
  catch (err) { res.status(400).json({ message: err.message }); }
});

module.exports = router;
