/**
 * Created by brianaamodt on 5/17/15.
 */
var firstName;
var lastName;
var email;
var app = angular.module('myApp', []);


App.controller('userKey', ["$scope", "$http", function($scope, $http){
    var getData = function() {
        return $http.get('/users/userInfo').then(function(response){
            console.log("success");
            showData(response);
        });
    };

    var showData = function(data){
        $('.userInfo').empty();
        for (var i = 0; i < data.length; i++) {
            name = "<label for='name'>Name:</label> " + data[i].firstName + " " + data[i].lastName;
            email = "<label for='Email'>Email:</label> " + data[i].email;
            $(".userInfo").append("<li>" + name + "</br>" + email + "</li>");
            $(".userEnter").append("<li>" + name + "<button>logout</button></li>");
        }
    }
    getData();
}]);


