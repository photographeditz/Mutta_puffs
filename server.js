const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running on Render!");
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Web server running on port ${port}`);
});
