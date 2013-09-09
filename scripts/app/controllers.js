function repoCtrl($scope, $http) {
	$http.get('https://api.github.com/users/christabor/repos').success(function(data) {
		var selected = [];
		$(data).each(function(k, repo){
			if(!repo.fork) {
				selected.push(repo);
			}
		});
		$scope.repos = selected;
	});
	return;
}
