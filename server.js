const express = require('express');
const cors = require('cors');
const faker = require('faker');
const uuidV1 = require('uuid/v1');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

const users = [];

for (let i = 0; i <= 1999; i++) {
  const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.country(),
    id: uuidV1(),
  };

  users.push(user);
}


app.get('/users', (req, res) => {
  const { perPage, page } =  req.query;

  res.json(users.slice(perPage * (page - 1), perPage * (page - 1) + perPage));
});

process.on('ungandledRejection', r => logger.error('Unhandled rejection', r));

module.exports = app;
