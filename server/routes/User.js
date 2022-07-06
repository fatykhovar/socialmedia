const express = require('express');
const router = express.Router();

const pool = require("../pool");

router.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2)",
      [username, password],
      (err, results) => {
        console.log(err);
        res.send(results);
      }
    );
  })

  router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
      (err, results) => {
          console.log('res:', results.rows[0]);
        if (results){
          console.log('res:', results);
        }
        
        if (err) {
          console.log(err);
        }
        if (results) {
          if (password == results.rows[0].password) {
            res.json({ loggedIn: true, username: username });
          } else {
            res.json({
              loggedIn: false,
              message: "Неправильный логин или пароль.",
            });
          }
        } else {
          res.json({ loggedIn: false, message: "Пользователь не существует." });
        }
      }
    );
  });

module.exports = router;