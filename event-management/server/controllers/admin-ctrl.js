const EventModel = require("../models/event-model");

addEvent = (req, res) => {
    EventModel.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(JSON.stringify(result));
        }
    })
};

module.exports = { addEvent };
