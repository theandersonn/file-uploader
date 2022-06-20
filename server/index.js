require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.listen(process.env.PORT);
