const express = require("express");
const router = require("./routes/router");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method}, ${req.url}, ${delta}`);
});
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
