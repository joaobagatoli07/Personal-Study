app.controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator) {
    $scope.app = "Lista Telefônica"

    $scope.contatos = contatos.data
    $scope.operadoras = operadoras.data
    $scope.contato = {
        data: new Date()
    }
    let generateSerial = contatos => {
        contatos.forEach(function (item) {
            item.serial = serialGenerator.generate()
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
})