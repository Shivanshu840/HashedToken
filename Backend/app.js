const express = require('express');
const mongoose = require('mongoose');
const folderRoutes = require('./routes/folderRoutes');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

 mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("database connected")
})

app.use('/folders', folderRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
