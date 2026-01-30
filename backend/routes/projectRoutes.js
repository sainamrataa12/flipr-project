const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const multer = require("multer");

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, "uploads/"); },
  filename: function (req, file, cb) { cb(null, Date.now() + "-" + file.originalname); },
});
const upload = multer({ storage });

// GET all projects
router.get("/", async (req, res) => {
  try { const projects = await Project.find(); res.json(projects); }
  catch (err) { res.status(500).json({ message: err.message }); }
});

// POST new project
router.post("/", upload.single("image"), async (req, res) => {
  const { name, description } = req.body;
  const image = req.file ? req.file.filename : null;
  const project = new Project({ name, description, image });
  try { const saved = await project.save(); res.status(201).json(saved); }
  catch (err) { res.status(400).json({ message: err.message }); }
});

module.exports = router;
