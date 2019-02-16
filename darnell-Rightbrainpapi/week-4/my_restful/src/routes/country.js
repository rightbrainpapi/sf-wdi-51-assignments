let CountryModel = require('../models/country.model');
let express = require('express')
let router = express.Router()

// create a new country
// Post Localhost:300/country
router.post('/country', (req, res)=>{
    if (!req.body){
        return res.status(400).send('Request body is missing.')
    }
//////////////////////////////////////
////The  expected data on come in/////
//////////////////////////////////////
    // let user ={
    //     name: "Ghana"
    //     Season: 'Winter'
    //     lesson: 'The love is there.'
    //     photo: 'url/url
    // }

    let model = new CountryModel(req.body) //<--- mongoose will take to the mogodriver and tell it to take the details the user posted and validate it via the country model and save it to the database. 
    model.save()
        .then(doc =>{ //<-----This is a promise and promises handle error and catch.
            if (!doc || doc.length === 0){
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

//-------------------Get Request-----------------------
router.get('/country',(req, res) => {
    if (!req.query.id){ //<----- Why doesn't it work when I change query to params?
        return res.status(400).send('Missing URL parameter: id')
    }

    CountryModel.findOne({
        _id: req.query.id //<----- Why doesn't it work when I change query to params?
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})


//-------------------Update Request-----------------------
router.put('/country', (req, res) =>{
    if (!req.query.id){ //<----- Why doesn't it work when I change query to params?
        return res.status(400).send('Missing URL parameter: id')
    }

    CountryModel.findOneAndUpdate({
        _id: req.query.id //<----- Why doesn't it work when I change query to params?
    }, req.body, {
        new: true
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })

})

//-------------------Update Request-----------------------
router.delete('/country', (req, res) =>{
    //calling in to country and make sure the id exist
    if (!req.query.id){ //<----- Why doesn't it work when I change query to params?
        return res.status(400).send('Missing URL parameter: id')
    }

    CountryModel.findOneAndRemove({
        _id: req.query.id //<----- Why doesn't it work when I change query to params?
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})


module.exports = router 