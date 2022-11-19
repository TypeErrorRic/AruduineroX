const { Router } = require('express');

const router = Router();

router.use(function (req, res,next) {
    next();
})

router.get('/about/:name/:points', (req,res) => {
    const bienvenida = [
        {
            Nombre : req.params.name,
            points : req.params.points,
        },
        {
            Nombre: "Arduineros",
            points: 100,
        }
    ]
    try
    {
        res.render('index', { title: req.params.name.toUpperCase(), bienvenida});
    }
    catch(error)
    {
        console.log(error);
    }
});

router.get('/about', (req,res) => {
    res.sendFile('./public/index.html', {
        root: require.main.path
    })
})

module.exports = router;