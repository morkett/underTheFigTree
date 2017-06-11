function uploadSingle (req, res) {
  res.status(200).json({ filename: req.file.key });
}
module.exports = {
  uploadSingle: uploadSingle
};
