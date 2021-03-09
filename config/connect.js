const mongoose = require('mongoose');

// DB Config
const db = require("./keys").mongoURI;
//connection to db
module.exports = mongoose
  .connect(  
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));