const User=require('../models/inventory');

const path=require('path');


exports.postUser = (req, res) => {
    const { price, name, category } = req.body;
    console.log("-----------------------");
    console.log(price);
    console.log(name);
    console.log(category);
    User.create({
      price: price,
      name: name,
      category: category,
    })
      .then(() => {
        res.send("User created");
      })
      .catch((err) => {
        res.send("Error creating user: ", err);
      });
  }

  exports.getUser = (req, res) => {
    User.findAll()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error getting users");
      });
  }

  exports.deleteUser =  (req, res) => {
    const id = req.params.id;
    User.destroy({ where: { id: id } })
      .then(() => {
        res.send("User deletedd");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error deleting userrrrrrr");
      });
  }