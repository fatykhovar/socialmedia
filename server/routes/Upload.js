const express = require("express");
const router = express.Router();

const pool = require("../pool");

router.post("/", (req, res) => {
  const description = req.body.description;
  const author = req.body.author;
  const id = req.body.id;

  console.log(description, author);
  pool.query(
    "INSERT INTO uploads (description, id, author) VALUES ($1, $2, $3);",
    [description, id, author],
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});

router.get("/", (req, res) => {
  pool.query("SELECT * FROM uploads", (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});

router.get("/byUser/:username", (req, res) => {
  const userName = req.params.username;
  pool.query(
    "SELECT * FROM uploads WHERE author = $1;",
    [userName],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    }
  );
});

router.post("/like", (req, res) => {
  const userLiking = req.body.userLiking;
  const postId = req.body.postId;
  const id = req.body.id;
  console.log(userLiking, postId, id)

  pool.query(
    "INSERT INTO likes (id, userLiking, postId) VALUES ($1, $2, $3)",
    [id, userLiking, postId],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      pool.query(
        "UPDATE uploads SET likes = likes + 1 WHERE id = $1",
        [postId],
        (err2, results2) => {
          res.send(results);
        }
      );
    }
  );
});

module.exports = router;
