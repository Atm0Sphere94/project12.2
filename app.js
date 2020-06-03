const express = require('express');
const bodyParser = require('body-parser');
const login = require('./controllers/users');
const createUser = require('./controllers/users');

const app = express();

const { PORT, connectDB } = require('./config');
const routeAll = require('./routes/routes');

const errorHandler = require('./errors/errorHandler');


connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routeAll);
app.use(errorHandler);
app.post('/signin', login);
app.post('/signup', createUser);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
