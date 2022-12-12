const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.url}, ${delta}`);
});
app.use(express.json());
const msgs = [];

app.post("/", (req, res) => {
  res.send("Hi");
});

app.get("/msg", (req, res) => res.send("<ul><li>A</li></ul>"));

app.post("/msg", (req, res) => {
  if (!req.body.msgText) {
    res.status(400).json({
      error: "Missing Msg Text",
    });
  }
  const newMsg = {
    msgId: msgs.length,
  };
  res.json(newMsg);
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
