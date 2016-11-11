angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http({
        method: 'GET',
        url: 'http://localhost:5000/sandwich'
      }).then(function(response){
        console.log(response);
        return response;
      });
    };

    this.getFriends = function() {
    	/* FIX ME */
    };

});
