const express = require('express')
const router = express.Router()
var deasync = require("deasync");
const EventModel = require('../models/event-model')
const EventCtrl = require("../controllers/admin-ctrl")
const regEvent=require("../models/register-event-model")
let part=[]
router.get('/add-event', EventCtrl.addEvent);

router.post('/add', (req, res) => {
    const { name, date, summary, org, dept, cate, venu, type, time, cont, desc } = req.body
    const newEvent = new EventModel({ name, date, summary, org, dept, cate, venu, type, time, cont, desc })
    newEvent.save().then(console.log('saved'))
});
router.get("/eve",(req,res)=>{
    EventModel.find({},function (err, result) {
        if (err) {
            res.send(err);
        } else {
            result.map((eve)=>{
                regEvent.find({id:eve._id},(err,res1)=>{
                    part.push({name:eve.name,res1})
                    //console.log(part)
                })            
            })
            while (part.length != result.length-1) {
                deasync.runLoopOnce()
              }
            res.send(part)
        }
    })  
})
module.exports = router