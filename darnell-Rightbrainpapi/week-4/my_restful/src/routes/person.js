 let express = require('express');
 let router = express.Router()


//usually have a call back method when you make that request
// QueryString => a query property on the requested object.
// allows us to do something like => localhost:3000/person?name=Darnell&age=28
router.get('/person', (req, res) =>{
    if (req.query.name){
        res.send(`You have requested a person called ${req.query.name}`)
    } else
    {
    res.send('You have requested a person!')
    }
})

//params property on the request object
//allows us to do this => localhost:3000/person/Darnell
router.get('/person/:name', (req, res) =>{
    
    res.send(`You have requested a person called ${req.params.name}`)
})

router.get('/person/error', (req, res)=>{
    throw new Error ('This is a forced error.')
})

 //exporting the route allows us to import it elsewhere.
 module.exports = router 