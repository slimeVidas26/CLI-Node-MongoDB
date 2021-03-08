const mongoose = require('mongoose');



 // DB Config
const db = require("./config/keys").mongoURI;
//connection to db
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));



