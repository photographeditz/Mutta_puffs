import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running on Render!");
});

// Render requires your app to listen on process.env.PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
