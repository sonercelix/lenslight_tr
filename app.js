import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Index sayfası");
});

app.get("/login", (req, res) => {
  res.send("Login sayfası");
});

app.get("/delete", (req, res) => {
  res.send("delete sayfası");
});

app.get("/list", (req, res) => {
  res.send("Makale listeleme sayfası");
});

app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
});
