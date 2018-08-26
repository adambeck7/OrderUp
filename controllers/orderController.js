var express = require("express");

var router = express.Router();

var order = require("../models/order.js");

router.get("/", function (req, res) {
    order.all(function (data) {
        var hbsObject = {
            orders: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/orders", function (req, res) {
    order.create([
        "order_name", "order_ready"
    ], [
        req.body.order_name, req.body.order_ready
    ], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/orders/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    order.update({
        order_ready: req.body.order_ready
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/orders/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    order.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;