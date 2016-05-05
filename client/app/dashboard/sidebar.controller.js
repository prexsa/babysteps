(function() {
  'use strict';

  angular
    .module('baby')
    .controller('SidebarCtrl', SidebarCtrl);

  function SidebarCtrl(auth, $state, $scope) {
    // initialize
    var vm = this;

    // variables
    // vm.inChat = false;
    // vm.chat = chat;
    // vm.leave = leave;

    // functions
    vm.logout = logout;
    vm.redirectToDash = redirectToDash;

    function logout() {
      auth.logout();
      $state.go('login');
    }

    function redirectToDash() {
      $state.go('dashboard');
    }

    $scope.$on('loggedOut', function() {
      vm.authed = false;
    });

    $scope.$on('loggedIn', function() {
      vm.authed = true;
    });
  }

    // function chat() {
    //   vm.inChat = true;
    //   $state.go('chat');
    // }

    // function leave() {
    //   vm.inChat = false;
    //   $state.go('dashboard');
    // }
})();