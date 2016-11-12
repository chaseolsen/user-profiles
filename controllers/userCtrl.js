var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {

  login: function(req, res, next){

    var result = users.map(function(user){ // <-- Turning users (from above) and mapping them into 'user'


      //req.body.name (the name)is the post we are inputing from postman

      if( req.body.name === user.name && req.body.password === user.password){
        // console.log(user);
        return user;
      }
    });
      // console.log(result[0]); // <-- Grabs the found user and just their data.
      if(result[0]){ // <--- if result[0] is true (has user data), then continue
        req.session.currentUser = result[0]; //<-- turn into req.session.currentUser
        res.json({userFound: true});
      } else {

        res.json({userFound: false});

      }


  },


};
