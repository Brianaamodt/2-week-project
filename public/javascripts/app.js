/**
 * Created by brianaamodt on 5/17/15.
 */
var app = angular.module('myApp', []);

app.controller('userKey', ["$scope", "$http", function($scope, $http){
    $scope.username= {};
    var getData = function() {
        return $http.get('/login/userLogIn').then(function (response) {
            if (response.status !== 200) {
                throw new Error('Failed to fetch from the API');
            }
            if (response) {
                console.log(response);
                $scope.username = response.data;
            }
        });
    };

    getData();
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