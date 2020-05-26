const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = {
  PORT,
  connectDB,
};
