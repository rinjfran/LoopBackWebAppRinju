
/* JavaScript content from js/app.js in folder common */

var app=angular.module('App', ['ionic']);
app.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('reg', {
      url: '/reg',
      templateUrl: 'views/register/register.html',
      controller:'regController'
    });


   
		$urlRouterProvider.otherwise("/reg");
	
})
.config(function ($httpProvider) {
   
}) 

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
