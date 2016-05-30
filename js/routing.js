var myApp = angular.module('recruiterApp', ['ngRoute']);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/:pagename', {
      templateUrl: 'router/template.html',
	  controller : 'tabController'

    }).
    otherwise({
      redirectTo: '/',
	  templateUrl: 'router/template.html',
	  controller : 'tabController'
	  
    });
  }
  
]);

myApp.controller('tabController', function($scope, $routeParams, $http) {
	$scope.page = (typeof $routeParams.pagename === 'undefined') ? $("#nav").children('li:first').attr('id') :  $routeParams.pagename;
	
	$("#nav").children('li').removeClass('active');
	$("#" +  $scope.page).addClass('active');
	
	$http({
		url :  'router/' + $scope.page + '.html',
		method: 'POST',
		cache:true
		
	}).success(function(html){
		$scope.data = html;
	});
});

myApp.directive('template',function($compile){
	return {
		restrict: 'A',
		replace: true,
		link: function (scope, ele, attrs) {
		  scope.$watch(attrs.template, function(html) {
			ele.html(html);
			$compile(ele.contents())(scope);
		  });
		}
	};
});

myApp.controller('mainController',function($scope){
	$scope.tabCompanies = [{name: 'SAP Labs Pvt Ltd.', fromTo : 'May ’16 – tillDate', urlParam:'sap', idParam:'sap'},
							{name: 'Cognizant Technology Solutions', fromTo : 'Aug ’14 – May ’16', urlParam:'cts', idParam:'cts'},
							{name: 'KRDS Pvt Ltd.', fromTo : 'Mar ’14 – Jul ’14', urlParam:'krds', idParam:'krds'},
							{name: 'BookMyShow', fromTo : 'Jun ’12 – Mar ’14', urlParam:'bookmyshow', idParam:'bookmyshow'} ,
							{name: 'ChangeRepublic.com', fromTo : 'July’11 – July ’12', urlParam:'cr', idParam:'cr'},
						];
	$scope.url = 'test.html';					
});
