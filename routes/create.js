const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const query = `
    INSERT INTO Note(title,body) 
    VALUES($1,$2)
    RETURNING *;
    `;
  const values = [req.body.title, req.body.body];
  const { rows } = await db.query(query, values);
  console.log(rows);
  res.redirect("/");
});

module.exports = router;
