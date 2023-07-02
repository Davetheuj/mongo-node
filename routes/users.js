const router = require('express').Router();
let User = require('../models/user.model');

//get all users
// router.route('/').get((req,res) => {
//     User.find().then(users => res.json(users)).catch(err => res.status(401).json('Error: ' + err));
    
// });



//add new user
router.route('/add').post((req,res) => {
    console.log("\n\n");
    console.log(req.body.userName);
    console.log("\n\n");
    console.log(req.body.userPassword);

    const username = req.body.userName;
    const password = req.body.userPassword;
    const email_address = req.body.userEmail;

    const newUser = new User({username, password, email_address});


    newUser.save().then(() => res.json('User has been added')).catch(err => res.status(400).json('Error: ' + err));
    
});

//delete user
router.route('/delete').delete((req,res) =>{

  User.findOneAndDelete({username: req.body.username, password: req.body.password}).then(()=> 
    res.json('User has been deleted')).catch(err => res.status(401).json('Error: ' + err));
    
    
  
});
//authenticate user
router.route('/login').post((req,res) =>{
 
    console.log("running this route");
    console.log(req.body.userName);

    User.find({username: req.body.userName, password: req.body.userPassword}).then(users => 
        
      res.json(users.length>0)).catch(err => res.status(401).json('Error: ' + err));     
             
  });


//modify user

module.exports = router;