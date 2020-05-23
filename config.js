const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const connectDB = (async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mestodb', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`Failed to connect to MongoDB: ${err.message}`);
  }
});

module.exports = {
  PORT,
  connectDB,
};
