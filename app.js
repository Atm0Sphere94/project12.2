const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { PORT, connectDB } = require('./config');
const routeAll = require('./routes/routes');

const errorHandler = require('./controllers/errorHandler');


connectDB();

app.use((req, res, next) => {
  req.user = {
    _id: '5ec28556734fdc274870584d',
  };
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routeAll);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
