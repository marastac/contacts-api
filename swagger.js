const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts',
    version: '1.0.0',
  },
  // FIX: Change localhost to your Render URL for production deployment
  host: 'contacts-api-9tcc.onrender.com',  // Your Render production URL
  schemes: ['https', 'http'],  // HTTPS first for production environment
  definitions: {
    Contact: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      favoriteColor: 'blue',
      birthDate: '1990-05-15'
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./index.js'); // Your project's root file
});