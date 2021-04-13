const db = require("./config/database");
const express = require("express");
const morgan = require("morgan");
const create = require("./routes/create");
const read = require("./routes/read.js");
const update = require("./routes/update");
const del = require("./routes/del");
const app = express();

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/create", create);
app.use("/read", read);
app.use("/update", update);
app.use("/delete", del);

app.get("/", async (req, res) => {
  const query = `
    SELECT * FROM Note
    ORDER BY id;
    `;
  const { rows } = await db.query(query);
  res.render("index", { item: rows });
});

app.listen(3000, () => {
  console.log("At port 3000");
});
