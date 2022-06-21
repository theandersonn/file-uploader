require('dotenv').config();
const cors = require('cors');
const express = require('express');

const connectDB = require('./db/connect');
const filesRoutes = require('./routes/files');

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use('/', filesRoutes);

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      process.env.PORT,
      console.log(`🚀 Server is listening on port ${process.env.PORT}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

startApp();
