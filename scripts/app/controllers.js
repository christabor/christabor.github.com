function repoCtrl($scope, $http) {
	$http.get('https://api.github.com/users/christabor/repos').success(function(data) {
		var selected = [];
		$(data).each(function(k, repo){
            if(!repo.homepage) repo['homepage'] = '#';
			if(!repo.fork) {
				selected.push(repo);
			}
		});
        selected.sort(function(r1, r2){
            return r1.stargazers_count < r2.stargazers_count;
        });
		$scope.repos = selected;
	});
}
