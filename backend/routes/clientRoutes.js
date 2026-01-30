const express = require("express");
const router = express.Router();
const Client = require("../models/Client");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// GET all clients
router.get("/", async (req, res) => {
  try { const clients = await Client.find(); res.json(clients); }
  catch (err) { res.status(500).json({ message: err.message }); }
});

// POST new client
router.post("/", upload.single("image"), async (req, res) => {
  const { name, designation, description } = req.body;
  const image = req.file ? req.file.filename : null;
  const client = new Client({ name, designation, description, image });
  try { const saved = await client.save(); res.status(201).json(saved); }
  catch (err) { res.status(400).json({ message: err.message }); }
});

module.exports = router;
