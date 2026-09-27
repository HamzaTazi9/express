import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hamza Tazi");
});

app.get("/api/v1/tasks", (req, res) => {
  res.send("GET tasks");
});

app.post("/api/v1/tasks", (req, res) => {
  res.send("POST tasks");
});

app.put("/api/v1/tasks/:id", (req, res) => {
  res.send("PUT tasks");
});

app.delete("/api/v1/tasks/:id", (req, res) => {
  res.send("DEL tasks width id: " + req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
