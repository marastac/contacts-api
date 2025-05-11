// models/contact.js
const mongoose = require('mongoose');

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  favoriteColor: { type: String, required: true },
  birthDate: { type: Date, required: true }
});

// Export Contact Model
module.exports = mongoose.model('Contact', contactSchema);
