var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  currentUser: function(req, res, next){
    var currentUserFriends = req.session.currentUser.friends;
    var yourArrayOfFriendObjects = [];

    for(var i = 0; i < currentUserFriends.length; i++){
      for (var j = 0; j < profiles.length; j++){
        if(currentUserFriends[i] === profiles[j].name){
          yourArrayOfFriendObjects.push(profiles[j]);
        }
      }
    }

    res.send({
      currentUser: req.session.currentUser,
      friends: yourArrayOfFriendObjects,
    });
  },


};
