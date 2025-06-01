// controllers/contactsController.js
// MVC PATTERN: Controller layer - Business logic separated from routes
// FIX: All controller functions moved from routes to follow MVC architecture
const Contact = require('../models/contact');

// Get All Contacts - Controller Function
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Contact by ID - Controller Function
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a New Contact - Controller Function
const createContact = async (req, res) => {
  const newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthDate: req.body.birthDate
  });

  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a Contact by ID - Controller Function
const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedContact) {
      res.json(updatedContact);
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Contact by ID - Controller Function
const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (deletedContact) {
      res.json({ message: "Contact deleted successfully" });
    } else {
      res.status(404).json({ message: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// EXPORT: All controller functions for use in routes following MVC pattern
module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};