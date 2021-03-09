angular.module('alurapic').controller('FotosController', function($scope, $http) {
    $scope.fotos = [];

    $http.get('v1/fotos')
        .success((data) => $scope.fotos = data)
        .error((erro) => console.log(erro))
});