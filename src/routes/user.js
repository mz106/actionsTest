const router = require("express").Router();

router.post("/", (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).json({msg: 'Bad request - username or password missing'});
    } else {
        res.status(201).json({msg: `User ${req.body.username} added`});
    }
});

router.post("/login", (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.status(400).json({msg: 'Bad request - username or password missing'});
    } else {
        res.status(201).send({msg: `${req.body.username}, you are logged in.`});
    }    
});

module.exports = router;