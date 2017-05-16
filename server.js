const express = require('express');
const cors = require('cors');
const faker = require('faker');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.get('/users', (req, res) => {
  const users = [];

  for (let i = 0; i <= 1999; i++) {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      country: faker.address.country(),
    };

    users.push(user);
  }

  res.json(users);
});

process.on('ungandledRejection', r => logger.error('Unhandled rejection', r));

module.exports = app;
