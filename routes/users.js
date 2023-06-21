const router = require('express').Router();
let User = require('../models/user.model');

//get all users
router.route('/').get((req,res) => {
    User.find().then(users => res.json(users)).catch(err => res.status(401).json('Error: ' + err));
    
});

//get one user
router.route('/:id').get((req,res) => {
    User.find().then(users => res.json(users)).catch(err => res.status(401).json('Error: ' + err));
    
});

//add new user
router.route('/add').post((req,res) => {
    console.log(req);
    console.log("\n\n");
    console.log(req.body);
    console.log("\n\n");
    console.log(req.body.username);
    console.log("\n\n");
    console.log(req.body.password);

    const username = req.body.username;
    const password = req.body.password;
    const email_address = req.body.email_address;

    const newUser = new User({username, password, email_address});


    newUser.save().then(() => res.json('User has been added')).catch(err => res.status(400).json('Error: ' + err));
    
});

//delete user
router.route('/delete').delete((req,res) =>{

  User.findOneAndDelete({username: req.body.username, password: req.body.password}).then(()=> 
    res.json('User has been deleted')).catch(err => res.status(401).json('Error: ' + err));
    
  
});


//modify user

module.exports = router;