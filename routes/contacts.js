// routes/contacts.js
// MVC PATTERN: Routes layer - Only route definitions, logic moved to controllers
const express = require('express');
const router = express.Router();
// IMPORT: Controller functions following MVC architecture
const contactsController = require('../controllers/contactsController');

// ROUTES: Clean route definitions using controller methods (MVC Pattern)

// Get All Contacts
router.get('/', 
  /*  #swagger.tags = ['Contacts']
      #swagger.summary = 'Get all contacts'
      #swagger.description = 'Retrieve all contacts from the database'
      #swagger.responses[200] = {
        description: 'Array of contacts',
        schema: { $ref: '#/definitions/Contact' }
      }
  */
  contactsController.getAllContacts
);

// Get Contact by ID
router.get('/:id', 
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
  contactsController.getContactById
);

// Create a New Contact
router.post('/', 
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
  contactsController.createContact
);

// Update a Contact by ID
router.put('/:id', 
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
  contactsController.updateContact
);

// Delete a Contact by ID
router.delete('/:id', 
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
  contactsController.deleteContact
);

module.exports = router;