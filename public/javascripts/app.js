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
                $scope.username = response.data.firstName + ' ' + response.data.lastName;
            }
        });
}]);

app.controller('articleContent', ["$scope", "$http", function($scope, $http){
    $scope.article = {};
    $scope.articles = [];
    var username;

//=======ARTICLES=======//
    var getArticles = function() {
        return $http.get('/articles').then(function(response){
            console.log(response);
            $scope.articles = response.data;
            return $scope.articles.data;
        });
    };

    $scope.create = function(article) {
        return $http.post('/add', article).then(getArticles());
    };

    $scope.delete = function(article) {
        return $http.delete('/' + article._id, article).then(getArticles());
    };

//=======COMMENTS=======//

    $http.get('/login/userLogIn').then(function (response) {
        if (response.data == "false") {
            $scope.loggedIn = true;
        }
    });

    var getComments = function() {
        console.log("YES THIS WORKS");
        return $http.get('/statement').then(function(response){
            console.log("GET COMES BACK: ", response.data);
            $scope.comments = response.data;
            return $scope.comments

        });
    };

    $scope.make = function(comment, _id) {
        fullComment = username + ": " + comment;
        console.log("click", fullComment, _id);
        $http.post('/comments', {comment: fullComment, id: _id}).then(getComments());
    };

    $http.get('/login/userLogIn').then(function (response) {
            username = response.data.firstName + ' ' + response.data.lastName;
    });

    $http.get('/login/userLogIn').then(function (response) {
        if (response.data.email == "brian.aamodt@gmail.com") {
            $scope.moddedIn = true;
        }
    });

    //$scope.delete = function(comment) {
    //    console.log(comment._id);
    //    return $http.delete('/' + comment._id, comment).then(getComments());
    //};
    getComments();
    getArticles();
}]);
