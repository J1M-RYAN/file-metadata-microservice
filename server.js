const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.static("public"));
const upload = multer({ dest: "upload/" });
app.post("/upload", upload.single("upfile"), (req, res) => {
  res.json(req.file);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
