const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.use('/api/auth', require(path.join(__dirname, 'routes', 'auth')));
app.use('/api/stores', require(path.join(__dirname, 'routes', 'store')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
