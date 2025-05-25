// routes/contacts.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// Get All Contacts
router.get('/', async (req, res) => {
  /*  #swagger.tags = ['Contacts']
      #swagger.summary = 'Get all contacts'
      #swagger.description = 'Retrieve all contacts from the database'
      #swagger.responses[200] = {
        description: 'Array of contacts',
        schema: { $ref: '#/definitions/Contact' }
      }
  */
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Contact by ID
router.get('/:id', async (req, res) => {
  /*  #swagger.tags = ['Contacts']
      #swagger.summary = 'Get contact by ID'
      #swagger.description = 'Retrieve a specific contact by their ID'
      #swagger.parameters['id'] = {
        in: 'path',
        description: 'Contact ID',
        required: true,
        type: 'string'
      }
      #swagger.responses[200] = {
        description: 'Contact found',
        schema: { $ref: '#/definitions/Contact' }
      }
      #swagger.responses[404] = {
        description: 'Contact not found'
      }
  */
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
});

// Create a New Contact
router.post('/', async (req, res) => {
  /*  #swagger.tags = ['Contacts']
      #swagger.summary = 'Create a new contact'
      #swagger.description = 'Create a new contact with all required fields'
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'Contact data',
        required: true,
        schema: { $ref: '#/definitions/Contact' }
      }
      #swagger.responses[201] = {
        description: 'Contact created successfully',
        schema: { $ref: '#/definitions/Contact' }
      }
      #swagger.responses[400] = {
        description: 'Invalid input data'
      }
  */
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
});

// Update a Contact by ID
router.put('/:id', async (req, res) => {
  /*  #swagger.tags = ['Contacts']
      #swagger.summary = 'Update a contact'
      #swagger.description = 'Update an existing contact by ID'
      #swagger.parameters['id'] = {
        in: 'path',
        description: 'Contact ID',
        required: true,
        type: 'string'
      }
      #swagger.parameters['body'] = {
        in: 'body',
        description: 'Updated contact data',
        required: true,
        schema: { $ref: '#/definitions/Contact' }
      }
      #swagger.responses[200] = {
        description: 'Contact updated successfully',
        schema: { $ref: '#/definitions/Contact' }
      }
      #swagger.responses[400] = {
        description: 'Invalid input data'
      }
      #swagger.responses[404] = {
        description: 'Contact not found'
      }
  */
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
});

// Delete a Contact by ID
router.delete('/:id', async (req, res) => {
  /*  #swagger.tags = ['Contacts']
      #swagger.summary = 'Delete a contact'
      #swagger.description = 'Delete a contact by ID'
      #swagger.parameters['id'] = {
        in: 'path',
        description: 'Contact ID',
        required: true,
        type: 'string'
      }
      #swagger.responses[200] = {
        description: 'Contact deleted successfully'
      }
      #swagger.responses[404] = {
        description: 'Contact not found'
      }
      #swagger.responses[500] = {
        description: 'Server error'
      }
  */
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
});

module.exports = router;