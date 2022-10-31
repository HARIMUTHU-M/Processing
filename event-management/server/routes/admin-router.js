const express = require('express')
const router = express.Router()

const EventModel = require('../models/event-model')
const EventCtrl = require("../controllers/admin-ctrl")

router.get('/add-event', EventCtrl.addEvent);

router.post('/add', (req, res) => {
    const { name, date, summary, org, dept, cate, venu, type, time, cont, desc } = req.body
    const newEvent = new EventModel({ name, date, summary, org, dept, cate, venu, type, time, cont, desc })
    newEvent.save().then(console.log('saved'))
});

module.exports = router