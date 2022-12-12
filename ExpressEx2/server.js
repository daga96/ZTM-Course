const express = require("express");
const app = express();
const PORT = 3000;

app.post("/", (req, res) => {
  res.send("Hi");
});

app.get("/msg", (req, res) => res.send("<ul><li>A</li></ul>"));

app.post("/msg", (req, res) => {
  console.log("restarting");
});

app.get("/msg/:msgId", (req, res) => {
  const msgId = req.params.msgId;
  const msg = msgs[msgId];
  if (msg) {
    res.json(msg);
  } else {
    res.status(404).json({
      error: "NO MSG",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
