const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/home.html'));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/profile.html"));
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
