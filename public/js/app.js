function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider, AuthFactory) {

  $stateProvider
    .state('login', {
      url: '/test',
      templateUrl: '../states/auth/login.html'
    })
    .state('create', {
      url: '/admin/create',
      views: {
        '': {templateUrl: '/states/auth/admin/admin.html'},
        'admin-main@create': {templateUrl: '/states/auth/admin/partials/_create.html'},
        resolve: {
          currentAuth: [
            'AuthFactory', (AuthFactory) => {
              return AuthFactory.$requireSignIn();
            }
          ]
        }
      }
    })
    .state('edit', {
      url: '/',
      views: {
        '': {templateUrl: '/states/auth/admin/admin.html'},
        'admin-main@edit': {templateUrl: '/states/auth/admin/partials/_edit.html'},
        resolve: {
          currentAuth: [
            'AuthFactory', (AuthFactory) => {
              return AuthFactory.$requireSignIn();
            }
          ]
        }
      }
    })
    .state('admin-showOne', {
      url: '/admin/edit/:recipeId',
      views: {
        '': {templateUrl: '/states/auth/admin/admin.html'},
        'admin-main@admin-showOne': {templateUrl: '/states/auth/admin/partials/_showOne.html'},
        resolve: {
          currentAuth: [
            'AuthFactory', (AuthFactory) => {
              return AuthFactory.$requireSignIn();
            }
          ]
        }
      }
    })
    .state('auth-required', {
      url: '/auth-required',
      templateUrl: '/states/auth/authRequired.html'
    });



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
