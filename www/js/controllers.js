angular.module('starter.controllers', [])
//首页的控制器
.controller('DashCtrl', function($scope,$http) {
  $http.get('http://localhost:3000/slide').success(function (data) {
      $scope.sliders = data;
  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
  //个人信息
.controller('AccountCtrl', function($scope,$http) {
  $scope.login = function (user) {
    $http.post('http://localhost:3000/log',user).success(function (data) {
      console.log(data);
      if(data.success){
        alert('登陆成功'); //将用户信息存储到本地，并且跳转到页面
        localStorage.setItem('user',data.user);
      }else{
        alert('失败');
      }
    });
  }
})
  .controller('successCtrl',function ($scope) {
    $scope.user = localStorage.getItem('user');
  });
