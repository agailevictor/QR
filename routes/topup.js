var express = require('express');
var router = express.Router();
var Recharge = require('../models/Topup');

router.post('/getUserCurrentBalance', function (req, res, next) {
    Recharge.handlegetUserCurrentBalance(function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows[0][0]);
        }

    });
});


router.post('/updateUserCurrentBalance', function (req, res, next) {
    Recharge.handleupdateUserCurrentBalance(res,req.body,function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows[0][0]);
        }

    });
});


module.exports = router;