const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  const { usuario, password } = req.body;
  console.log(req.body);
  if (usuario !== '' && password !== '') {
    res.render('login', { message: 'Usuario Aprobado' });
  } else {
    res.render('login', { message: 'Datos Incorectos' });
  }
});

module.exports = router;
