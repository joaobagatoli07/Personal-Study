app.controller("listaTelefonicaCtrl", function ($scope, $filter, $http) {
    $scope.app = "Lista Telefônica"

    $scope.contatos = []
    $scope.operadoras = []

    let carregarContatos = () => {
        $http.get("http://localhost:3000/contatos").then(function (response) {
            $scope.contatos = response.data;
        }).catch(function(response){
            $scope.message = "Algo deu errado: " + response.data
        })
    }

    let carregarOperadoras = () => {
        $http.get("http://localhost:3000/operadoras").then(function (response) {
            $scope.operadoras = response.data
        })
    }

    $scope.adicionarContato = function (contato) {
        contato.data = new Date()
        $http.post("http://localhost:3000/contatos", contato).then(function (response) {
            delete $scope.contato
            $scope.contatoForm.$setPristine()
            carregarContatos()
        })
    }
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato
        })
    }
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado
        })
    }
    $scope.ordenarPor = function (campo) {
        $scope.criterioOrdenacao = campo
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao
    }

    carregarContatos()
    carregarOperadoras()
})