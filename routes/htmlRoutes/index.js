const path = require("path")
// sets it as a router
  const router = require('express').Router();

  // serves notes page
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

  // serves homepage
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  module.exports = router