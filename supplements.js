const express = require('express');
const router = express.Router();
const Supplement = require('../models/supplements');

// Рут за приказ на листата на суплементи
router.get('/supplement', async (req, res) => {
  try {
    const supplements = await Supplement.find();
    res.render('list', { supplements });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Рут за приказ на формата за додавање на суплемент
router.get('/add', (req, res) => {
  res.render('add-supplement');
});

// Рут за додавање нов суплемент
router.post('/add', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  const newSupplement = new Supplement({ name, description, price, quantity });

  try {
    await newSupplement.save();
    res.redirect('/supplements');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Рут за приказ на формата за уредување на суплемент
router.get('/edit/:id', async (req, res) => {
  try {
    const supplement = await Supplement.findById(req.params.id);
    res.render('edit-supplement', { supplement });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Нов рут за приказ на детали за суплемент
router.get('/detail/:id', async (req, res) => {
  try {
    const supplement = await Supplement.findById(req.params.id);
    res.render('detail-supplement', { supplement });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
