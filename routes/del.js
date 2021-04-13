const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/:id", async (req, res) => {
  const query = ` 
    DELETE FROM Note
    WHERE id=$1
    RETURNING *;
    `;
  const values = [req.params.id];
  const { result } = await db.query(query, values);
  console.log(result);
  res.redirect("/");
});

module.exports = router;
