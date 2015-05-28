/**
 * Created by brianaamodt on 5/17/15.
 */
var app = angular.module('myApp', []);

app.controller('userKey', ["$scope", "$http", function($scope, $http){

    $scope.getData = function() {
        return $http.get('/users/userLogIn').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch from the API');
            }
            console.log(response);
            $scope.showData= function(data){
            for (var i = 0; i < data.length; i++) {
            $scope.username = data[i].firstName;
            }};

            showData(response);
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