var orm = require("../config/orm.js");

var order = {
    all: function (cb) {
        orm.all("orders", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("orders", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("orders", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("orders", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = order;