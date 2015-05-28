/**
 * Created by brianaamodt on 5/17/15.
 */
var app = angular.module('myApp', []);

app.controller('userKey', ["$scope", "$http", function($scope, $http){

    $scope.getData = function() {
        return $http.get('/users/userLogin').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch from the API');
            }
            $scope.showData= function(response){
            for (var i = 0; i < data.length; i++) {
            $scope.username = response[i].firstName;
            }}

            //$scope.username(function(username){
            //    if (username.firstName == false){
            //        username["showName"] = false;
            //    }else{
            //        firstName["showName"] = true;
            //    }
            //});
            //console.log("success");
        //    $scope.username = response.data;
        });
    };
}]);

//
//            console.log('post: ', response.data);
//        });
//
//    };

// FOR THE USER PAGE
//var showData = function(data){
//$('.userLogin').empty();
//for (var i = 0; i < data.length; i++) {
//    name = "<label for='name'>Name:</label> " + data[i].firstName + " " + data[i].lastName;
//    email = "<label for='Email'>Email:</label> " + data[i].email;