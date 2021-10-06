var express = require('express');
var router = express.Router();

/* GET personas page. */
router.get('/', function (req, res, next) {
  res.render('personas');
});

/* Localhost:3000/personas/1 */
// router.get('/:id', function (req, res, next) {
//   console.log(req.params);
//   res.render('persona', { persona: req.params.id });
// });

/* Localhost:3000/personas/1/name */
router.get('/:id/:nombre', function (req, res, next) {
  console.log(req.params);
  res.render('persona', {
    persona_id: req.params.id,
    persona_nombre: req.params.nombre,
  });
});

module.exports = router;

/*
  app.js -> routes
  express.Router() -> routing | verbos http
  req: request(todo lo que llega al servidor)
    envian informacion a traves formulario (req.body)
    envian informacion a traves  de URL (req.params) localhost:3000/personas/1
    envian informacion a traves  de URL (req.query) localhost:3000/personas?nombre=franco

    SESIONES
    res-> respuestas (res.render | res.json(), res.send)

*/
