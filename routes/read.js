const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/:id", async (req, res) => {
  const query = `
    SELECT * FROM Note
      WHERE id=$1;
      `;
  const values = [req.params.id];

  const { rows } = await db.query(query, values);
  res.render("read", { data: rows[0] });
});
module.exports = router;
