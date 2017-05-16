const express = require('express');
const faker = require('faker');

const app = express();

app.get('/users', (req, res) => {
  const users = [];

  for (let i = 0; i <= 2000; i++) {
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
