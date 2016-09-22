angular.module('starter.controllers', [])
//首页的控制器
.controller('DashCtrl', function($scope,$http) {
  $http.get('http://localhost:3000/slide').success(function (data) {
      $scope.sliders = data;
  });
})
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
  //个人信息
.controller('AccountCtrl', function($scope,$http,$state) {
  $scope.login = function (user) {
    $http.post('http://localhost:3000/log',user).success(function (data) {
      console.log(data);
      if(data.success){
        alert('登陆成功'); //将用户信息存储到本地，并且跳转到页面
        console.log(data.data);
        localStorage.setItem('user',JSON.stringify(data.data)); //本地存储data数据
        $state.go('tab.success');
      }else{
        alert('失败');
      }
    });
  }
})
.controller('successCtrl',function ($scope) {
    $scope.user = JSON.parse(localStorage.getItem('user'));
});
