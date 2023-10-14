const router = require('express').Router();
let User = require('../models/user.model');
let MatchmakingUser = require('../models/matchmakinguser.model');

//get all users
// router.route('/').get((req,res) => {
//     User.find().then(users => res.json(users)).catch(err => res.status(401).json('Error: ' + err));
    
// });



//add new user
router.route('/add').post((req,res) => {
  console.log("Running Add Route");

  
  User.findOne({userName: req.body.userName}).then(user => 
    {
    if(user == null){ 
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;
    const userEmail = req.body.userEmail;
    const userMMR = 800;
    const boardPresets = req.body.boardPresets;

    const newUser = new User({userName, userPassword, userEmail, userMMR, boardPresets});

    

    newUser.save().then(() => res.json('true'))
    }
    else
    {
      res.json('taken');
    }
  }
  ).catch(_err => res.status(400).json('false'));
   
});

//delete user
router.route('/delete').delete((req,res) =>{
  console.log("Running Delete Route");
  User.findOneAndDelete({userName: req.body.userName, userPassword: req.body.userPassword}).then(()=> 
    res.json('true')).catch(_err => res.status(401).json('false'));
    
    
  
});
//authenticate user
router.route('/login').post((req,res) =>{
    console.log("Running Login Route");
    User.findOne({userName: req.body.userName, userPassword: req.body.userPassword}).then(users => 
      
      
      res.json(users)).then(() => {global.matchmakingServer.AddUserToCluster(req.body.userName,800)}).catch(_err => res.status(401).json('false'));     
     
             
  });

  //update user board presets
router.route('/update-board-presets').post((req,res) =>{
  console.log("Running Update Route For: " + req.body.userName);
  
  User.findOne({userName: req.body.userName}).then(user => 
    {
    if(user == null){ 
    

      res.json('No Such User');

    }
    else
    {
      user.boardPresets = req.body.boardPresets;
      user.save().then(() => res.json('Save Succesful'))
    }
  }
  ).catch(_err => res.status(400).json('false'));    
   
           
});

  //get matchmaking users
router.route('/matchmaking-users').get((res)=>{
    MatchmakingUser.find().then(users =>
      res.json(users)).catch(_err => res.status(401).json('Get Matchmaking Users Request Invalid'));
  });

  //add new matchmaking user
router.route('/add-matchmaking-user').post((req,res) => {
  console.log("Running Add MM User Route");

  
  MatchmakingUser.findOne({userName: req.body.userName}).then(user => 
    {
    if(user == null){ 
    const userName = req.body.userName;
    const joinCode = req.body.joinCode;
    const userMMR = req.body.userMMR;
    const newUser = new MatchmakingUser({userName, joinCode, userMMR});
    newUser.save().then(() => res.json('true'))
    }
    else
    {
      console.log('deleting user');
      user.delete().then(() => res.json('User Removed'));
    }
  }
  ).catch(_err => res.status(400).json('false'));
   
});

module.exports = router;