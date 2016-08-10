var ehealth = angular.module('ehealth', ['ui.router']);

ehealth.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
		.state('welcome', {
			url: '/welcome',
			templateUrl: 'ng/partials/welcome.html',
			//controller: 'beneficiariesCtrl'
			controller: function($scope){
				$scope.task1 = false;
				$scope.task2 = false;
				$scope.task3 = false;
				$scope.task4 = false;
				$scope.task5 = false;

				$scope.input1 = "";
				$scope.input2 = "";
				$scope.resultStr = "";


				$scope.find_chars = function(){
					input1 = $scope.input1.split("");
					input2 = $scope.input2.split("");
					$scope.resultStr = "";
					input2.forEach(function(v, k){
						var curr = v;
						for(i = 0; i < input1.length; i++){
							if(input1[i] == curr){
								$scope.resultStr += curr;
								break;
							}
						}
					})
				}

				$scope.array1 = [];
				$scope.resultAraay = [];
				$scope.compact_array = function(){
					array1 = $scope.array1.split(",");
					$scope.resultArray = [];
					array1.forEach(function(v, k){
						array1[k] = v.trim();
					})
					$scope.resultArray = array1.filter(function(el, i, arr) {
						return i == arr.indexOf(el);
					})
				}

				$scope.flip_array = [];
				$scope.flip_position = "";
				$scope.reverse_array = function(){
					$scope.resultArrayFlip = [];
					if($scope.flip_array.length > 0){
						array = $scope.flip_array.split(",");
					}else{
						array = [];
					}
					if(parseFloat($scope.flip_position)){
						flip_position = parseFloat($scope.flip_position);
					}else{
						$scope.flip_position = 2;
					}
					$scope.flip_position = Math.ceil($scope.flip_position);

					if($scope.flip_position > array.length){
						$scope.flip_position = array.length;
					}

					j = array.length - $scope.flip_position;
					for (i = 0; i < array.length; i++) {
						k = (i + j) % array.length;
						$scope.resultArrayFlip.push(array[k]);
					}
				}

				$scope.lcm_array = [];
				$scope.calc_lcm = function(){
					console.log($scope.lcm_array)
				}
			}
		})

		.state('pouch', {
			url: '/pouch',
			templateUrl: 'ng/partials/pouch.html',
			controller: function($scope, $window){
				
			}
		})

		$urlRouterProvider.otherwise('/welcome');
})