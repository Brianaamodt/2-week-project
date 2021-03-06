/**
 * Created by brianaamodt on 5/17/15.
 */
var app = angular.module('myApp', []);

var openArticle;

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
            $scope.article = {};
            $scope.showArticle= false;
            console.log(response);
            $scope.articles = response.data;
            return $scope.articles.data;
        });
    };

    $scope.create = function(article) {
        return $http.post('/add', article).unshift(getArticles());
    };

    $scope.delete = function(article) {
        console.log(article, article._id);
        return $http.delete('/' + article._id, article).then(getArticles());
    };

//=======COMMENTS=======//

    $http.get('/login/userLogIn').then(function (response) {
        if (response.data == "false") {
            $scope.loggedIn = true;
        }
    });

    $scope.make = function(comment, _id) {
        fullComment = username + ": " + comment;
        console.log("click", fullComment, _id);
        $http.post('/comments', {comment: fullComment, id: _id}).then(getArticles());
    };

    $http.get('/login/userLogIn').then(function (response) {
            username = response.data.firstName + ' ' + response.data.lastName;
    });

    $http.get('/login/userLogIn').then(function (response) {
        if (response.data.email == "brian.aamodt@gmail.com") {
            $scope.moddedIn = true;
        }
    });

    $scope.showHide = function(showComment) {
            if ($scope.showComment == true) {
                $scope.showComment = false;
            } else {
                $scope.showComment = true;
            }
    };

    getArticles()

}]);