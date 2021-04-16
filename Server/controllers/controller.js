const data = require('../data');
const sources = require('../models/SourceModel')

module.exports = {

    conts: (req, res) => { 
        sources.find({})
        .then(contsData =>{
            console.log(contsData);
            res.json({"message": "OK5555", data: contsData}); 
        })
       
    },

    add_cont: (req, res) => {
        sources.create(req.body.cont)
        .then(contsData =>{
            console.log(contsData)
            res.json({"message": "OKs", data: contsData});
        })

        .catch(err => {
            console.log(err)
            res.json(err)
        })
        
    },

    del_cont: (req, res) => {

        sources.findOneAndDelete(req.params.id)
        .then(contsData =>{
            console.log(contsData)
            res.json({"message": "booyah", data: contsData});
        })

        // sources.updateMany( { "id": { $gt: 1 } },{ $set: { "id" : 1000 } })
        // .then(contsData =>{
        //     console.log(contsData)
        //     res.json({"message": "booyah", data: contsData});
        // })

        .catch(err =>{
            console.log(err)
            res.json(err)
        });
       
    },
};