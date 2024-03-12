app.controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefônica"

    $scope.contatos = []
    $scope.operadoras = []

    let carregarContatos = () => {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        }).catch(function(response){
            $scope.error = "Não foi possível carregar os dados"
        })
    }

    let carregarOperadoras = () => {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data
        })
    }

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate()
        contato.data = new Date()
        contatosAPI.saveContato(contato).then(function (response) {
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