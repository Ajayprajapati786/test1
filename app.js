const express = require("express");
const bodyParser = require("body-parser");
// const Sequelize = require("sequelize");
const cors = require("cors");
const sequelize=require('./util/database');
const adminRouter=require('./routes/admin');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(adminRouter);



app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


sequelize
  .sync()
  .then(() => {
    console.log("D");
  })
  .catch((err) => {
    console.log("Error creating database and tables: ", err);
  });


app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
