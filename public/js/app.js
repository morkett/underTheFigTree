function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider, AuthFactory) {

  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: '../states/auth/login.html'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: '/states/auth/admin/admin.html',
      resolve: {
        currentAuth: [
          'AuthFactory', (AuthFactory) => {
            return AuthFactory.$requireSignIn();
          }
        ]
      }
    })
    .state('edit', {
      url: '/admin/edit',
      templateUrl: '/states/auth/admin/edit.html',
      resolve: {
        currentAuth: [
          'AuthFactory', (AuthFactory) => {
            return AuthFactory.$requireSignIn();
          }
        ]
      }
    })
    .state('create', {
      url: '/admin/create',
      templateUrl: '/states/auth/admin/create.html',
      resolve: {
        currentAuth: [
          'AuthFactory', (AuthFactory) => {
            return AuthFactory.$requireSignIn();
          }
        ]
      }
    })
    .state('auth-required', {
      url: '/auth-required',
      templateUrl: '/states/auth/authRequired.html'
    });
    // .state('search', {
    //   url: '/search',
    //   templateUrl: '/states/search.html',
    //   resolve: {
    //     currentAuth: [
    //       'AuthFactory', (AuthFactory) => {
    //         return AuthFactory.$requireSignIn();
    //       }
    //     ]
    //   }
    // })
    // .state('movieDetails', {
    //   url: '/movie/:movieId',
    //   templateUrl: '/states/movieDetails.html',
    //   resolve: {
    //     currentAuth: [
    //       'AuthFactory', (AuthFactory) => {
    //         return AuthFactory.$requireSignIn();
    //       }
    //     ]
    //   }
    // })


  $urlRouterProvider.otherwise('/');

}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function AuthCatcher($rootScope, $state) {
  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) =>{
    if (error === 'AUTH_REQUIRED') {
      $state.go('auth-required');
    }
  });
}


angular
  .module('myApp', ['ui.router','firebase'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter)
  .run(AuthCatcher);
