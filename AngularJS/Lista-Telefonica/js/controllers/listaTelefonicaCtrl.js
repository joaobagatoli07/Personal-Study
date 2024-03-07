app.controller("listaTelefonicaCtrl", function ($scope, $filter, $http) {
    $scope.app = "Lista Telefônica"

    // $scope.contatos = []
    // $scope.operadoras = []

    $scope.contatos = [
        { nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular" } },
        { nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" } },
        { nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: { nome: "Tim", codigo: 41, categoria: "Celular" } }
    ]
    $scope.operadoras = [
        { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
        { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
        { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
        { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
        { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 }
    ]

    // let carregarContatos = () => {
    //     $http.get("http://localhost:3412/contatos").then(function (response) {
    //         $scope.contatos = response.data;
    //     }).catch(function(response){
    //         $scope.message = "Algo deu errado: " + response.data
    //     })
    // }

    // let carregarOperadoras = () => {
    //     $http.get("http://localhost:3412/operadoras").then(function (response) {
    //         $scope.operadoras = response.data
    //     })
    // }

    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato))
        // $http.post("http://localhost:3412/contatos", contato).then(function (response) {
        //     delete $scope.contato
        //     $scope.contatoForm.$setPristine()
        //     carregarContatos()
        //     $scope.contatos.push(response.data)
        // })
        delete $scope.contato
        $scope.contatoForm.$setPristine()
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

    // carregarContatos()
})