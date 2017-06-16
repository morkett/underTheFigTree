function MainRouter ($stateProvider, $urlRouterProvider, $locationProvider, AuthFactory) {

  $stateProvider
  .state('home', {
    url: '/',
    views: {
      '': {templateUrl: '/states/public/template.html'},
      'front-template@home': {templateUrl: '/states/public/partials/_home.html'}
    }
  })
  .state('view-one', {
    url: '/recipe/:recipeId',
    views: {
      '': {templateUrl: '/states/public/template.html'},
      'front-template@view-one': {templateUrl: '/states/public/partials/_view-one.html'}
    }
  })
  .state('view-all', {
    url: '/recipes/',
    views: {
      '': {templateUrl: '/states/public/template.html'},
      'front-template@view-all': {templateUrl: '/states/public/partials/_view-all.html'}
    }
  })
  .state('type', {
    url: '/type/:type',
    views: {
      '': {templateUrl: '/states/public/template.html'},
      'front-template@type': {templateUrl: '/states/public/partials/_type.html'}
    }
  })


  //ADMIN
    .state('login', {
      url: '/admin/login',
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
      url: '/admin/edit',
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
  .module('myApp', ['ui.router','firebase','ngclipboard', 'ngFileUpload','angularLazyImg'])
  .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter)
  .run(AuthCatcher);
