const Bug = require('../models/Bug');

// Create Bug
exports.createBug = async (req, res) => {
  try {
    const bug = new Bug(req.body);
    const saved = await bug.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Bugs
exports.getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

// Update Bug
exports.updateBug = async (req, res) => {
  const { id } = req.params;
  const updated = await Bug.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// Delete Bug
exports.deleteBug = async (req, res) => {
  const { id } = req.params;
  await Bug.findByIdAndDelete(id);
  res.json({ message: 'Bug deleted' });
};
