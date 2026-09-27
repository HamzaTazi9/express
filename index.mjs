import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hamza Tazi");
});

// GET /api/v1/todos
// POST /api/v1/todos
// PUT /api/v1/todos/3
// DEL /api/v1/todos/3

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
