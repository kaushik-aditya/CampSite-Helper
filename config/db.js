var mongoose   = require("mongoose");
var config = require("./config.js");

const connectDB = async () => {
  const { host, port, db } = config.development.database;
  const uri = `mongodb://${host}:${port}/${db}`;
  
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;