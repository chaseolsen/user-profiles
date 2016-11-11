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

    var result = users.map(function(user){

      if( req.body.name === user.name && req.body.password === user.password){
        return user;
      }
    });

      if(result[0]){
        req.session.currentUser = result[0];
        res.json({userFound: true});
      } else {

        res.json({userFound: false});

      }


  },


};
