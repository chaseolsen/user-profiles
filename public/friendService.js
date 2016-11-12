angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http({
        method: 'POST',
        url: 'http://localhost:4000/api/login',
        data: {
          "name": user.name,
          "password": user.password
        }
      });
    };

    this.getFriends = function() {
    	return $http({
        method: 'GET',
        url: 'http://localhost:4000/api/profiles'
      }).then(function(response){
        console.log(response);
        return response;
      });
    };

});
