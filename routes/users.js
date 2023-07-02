const router = require('express').Router();
let User = require('../models/user.model');

//get all users
// router.route('/').get((req,res) => {
//     User.find().then(users => res.json(users)).catch(err => res.status(401).json('Error: ' + err));
    
// });



//add new user
router.route('/add').post((req,res) => {
  console.log("Running Add Route");
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;
    const userEmail = req.body.userEmail;

    const newUser = new User({userName, userPassword, userEmail});


    newUser.save().then(() => res.json('true')).catch(err => res.status(400).json('false'));
    
});

//delete user
router.route('/delete').delete((req,res) =>{
  console.log("Running Delete Route");
  User.findOneAndDelete({userName: req.body.username, userPassword: req.body.password}).then(()=> 
    res.json('true')).catch(err => res.status(401).json('false'));
    
    
  
});
//authenticate user
router.route('/login').post((req,res) =>{
    console.log("Running Login Route");
    User.find({userName: req.body.userName, userPassword: req.body.userPassword}).then(users => 
        
      res.json(users.length>0)).catch(err => res.status(401).json('false'));     
             
  });

module.exports = router;