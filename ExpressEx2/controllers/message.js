const path = require("path");

function getMessages(req, res) {
  const filePath = path.join(__dirname, "..", "public", "skimountain.jpg");
  res.sendFile(filePath);
}

function postMessage(req, res) {
  console.log("Posting message...");
}

module.exports = {
  getMessages,
  postMessage,
};
