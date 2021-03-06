var diceChallenge = angular.module('diceChallenge', []);

diceChallenge.controller('DealerCtrl', function($scope) {
	
	// $scope.dealers [
	// 	$http.get('http://dice.services/shared/get.json').success(function(data){
	// 		$scope.dealers=data;
	// 	})
	// 	]
	// }	

	$scope.dealers = [
		{"adSettings":{"id":2,"callTo":["(503) 123-4567","503-912-1234"],"emailTo":[{"email":"test@posting.services.com","format":"TXT"}],"showPrice":true,"showMileage":true,"withoutImages":false,"recordAlert":true,"postNew":false,"workingHours":{"mon":{"start":540,"end":1140},"tue":{"start":540,"end":1140},"wed":{"start":540,"end":1140},"thu":{"start":540,"end":1140},"fri":{"start":540,"end":1140},"sat":{"start":600,"end":1200},"sun":{"start":0,"end":0}},"other":"Disclaimer: All vehicles are subject to prior sale. We reserve the right to make changes without notice and are not responsible for error or omissions. All prices exclude government fees and taxes, any finance charges and any emissions test charge. It is responsibility of the buyer to call and verify all information in this ad. ","dealerId":2},"address":{"id":2,"name":"Demo","streetAddress1":"123 NE 1st Street","streetAddress2":"","city":"Portland","province":"OR","postalCode":"97230","country":"US"},"dealer":{"id":2,"name":"Demo","status":"active","timeZone":"America/Los_Angeles","defaultBrandingId":13,"addressId":2,"contactId":5,"vendorId":"dice"}}
	];

	$scope.addName = function() {
		$scope.dealers.push({ address: $scope.dealerName });
		$scope.dealerName = null;
	};
});
