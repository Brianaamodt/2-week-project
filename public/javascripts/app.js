/**
 * Created by brianaamodt on 5/17/15.
 */
var app = angular.module('myApp', []);

app.controller('userKey', ["$scope", "$http", function($scope, $http){

    $http.get('/login/userLogIn').then(function (response) {
            if (response.data == "false") {
                console.log(response);
                $scope.loggedIn = true;
            } else {
                console.log(response);
                $scope.username = response.data;
            }
        });
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