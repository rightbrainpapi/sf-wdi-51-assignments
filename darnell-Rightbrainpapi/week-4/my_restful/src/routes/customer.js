let CustomerModel = require('../models/customer.model');
let express = require('express')
let router = express.Router()

// create a new customer
// Post Localhost:300/customer
router.post('/customer', (req, res)=>{
    if (!req.body){
        return res.status(400).send('Request body is missing.')
    }
//////////////////////////////////////
////The  expected data on come in/////
//////////////////////////////////////
    // let user ={
    //     name: "Firstname Lastname"
    //     email: 'email@gmail.com'
    // }

    let model = new CustomerModel(req.body) //<--- mongoose will take to the mogodriver and tell it to take the details the user posted and validate it via the customer model and save it to the database. 
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
router.get('/customer',(req, res) => {
    if (!req.query.email){
        return res.status(400).send('Missing URL parameter: email')
    }

    CustomerModel.findOne({
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})


//-------------------Update Request-----------------------
router.put('/customer', (req, res) =>{
    if (!req.query.email){
        return res.status(400).send('Missing URL parameter: email')
    }

    CustomerModel.findOneAndUpdate({
        email: req.query.email
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

//-------------------Delete Request-----------------------
router.delete('/customer', (req, res) =>{
    //calling in to customer and make sure the email exist
    if (!req.query.email){
        return res.status(400).send('Missing URL parameter: email')
    }

    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})


module.exports = router 