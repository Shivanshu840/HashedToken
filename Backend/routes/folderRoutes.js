const express = require('express');
const router = express.Router();
const Folder = require('../models/Folder');

// Get all folders
router.get('/list', async (req, res) => {
  try {
    const folders = await Folder.find({}).populate('children');
    res.json(folders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new folder
router.post('/create-folder', async (req, res) => {
  const { name, parent } = req.body;
  const folder = new Folder({ name, parent });

  try {
    const newFolder = await folder.save();

    if (parent) {
      await Folder.findByIdAndUpdate(parent, { $push: { children: newFolder._id } });
    }

    res.status(201).json(newFolder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
