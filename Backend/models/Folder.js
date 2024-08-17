const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', default: null },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Folder' }],
});

module.exports = mongoose.model('Folder', folderSchema);
