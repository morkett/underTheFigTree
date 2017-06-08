/*global firebase */

function AuthRun() {
  var config = {
    apiKey: 'AIzaSyDARTXkYg1itzsKHoawo-MheiEN-YEe0Uo',
    authDomain: 'underthefigtree-4bb2f.firebaseapp.com',
    databaseURL: 'https://underthefigtree-4bb2f.firebaseio.com',
    projectId: 'underthefigtree-4bb2f',
    storageBucket: 'underthefigtree-4bb2f.appspot.com',
    messagingSenderId: '1066230166858'
  };
  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth){
  return $firebaseAuth();
}
AuthFactory.$inject = ['$firebaseAuth'];


angular
  .module('myApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
