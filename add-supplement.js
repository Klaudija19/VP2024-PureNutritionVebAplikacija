const express = require('express');
const router = express.Router();

router.get('/add-supplement', (req, res) => {
  res.render('add-supplement');
});

module.exports = router;
