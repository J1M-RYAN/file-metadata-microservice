const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "upload/" });
app.use(express.static("./public"));
app.post("/upload", upload.single("upfile"), (req, res) => {
  console.log("hi");
  res.json(req.file);
});

app.listen(3000, () => console.log("running"));
