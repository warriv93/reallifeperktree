module.exports = (articles) => {
    var express = require('express');
    var router = express.Router();

    router.get('/strength', function (req, res, next) {
        res.send(articles);
    });

    return router;
};

