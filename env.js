module.exports = {
  path: __dirname,
  db_url: process.env.MONGODB_URI || 'mongodb://localhost/recipes'
};
