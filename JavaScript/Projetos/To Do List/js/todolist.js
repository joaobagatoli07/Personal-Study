// Função de autoinvocação para criar um escopo isolado
; (function () {
    "use strict"

    // Armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input") // Input para adicionar novas tarefas
    const todoAddForm = document.getElementById("todo-add") // Formulário para adicionar tarefas
    const ul = document.getElementById("todo-list") // Lista não ordenada (ul) para exibir as tarefas
    const li = ul.getElementsByTagName("li") // Lista de elementos li existentes na ul

    // Array de tarefa
    let arrTasks = getSavedData()

    // Função para obter dados salvos do armazenamento local ou fornecer um padrão se não houver dados salvos
    function getSavedData() {
        let tasksData = localStorage.getItem("tasks");
    
        try {
            tasksData = JSON.parse(tasksData);
        } catch (error) {
            console.error("Erro ao fazer o parse dos dados salvos:", error);
            // Se ocorrer um erro ao fazer o parse, retornar um array padrão
            return [
                {
                    name: "task 1",
                    createAt: Date.now(),
                    completed: false
                }
            ];
        }
    
        // Verificar se tasksData é um array não vazio
        if (Array.isArray(tasksData) && tasksData.length > 0) {
            return tasksData;
        } else {
            // Se tasksData não for um array válido, retornar o array padrão
            return [
                {
                    name: "task 1",
                    createAt: Date.now(),
                    completed: false
                }
            ];
        }
    }
    
    // Função para salvar os dados no armazenamento local
    function setNewData() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

    setNewData()

    // Função para gerar um elemento li (tarefa) com base em um objeto
    function generateLiTask(obj) {
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")
        const containerEdit = document.createElement("div")
        const inputEdit = document.createElement("input")
        const containerEditButton = document.createElement("button")
        const containerCancelButton = document.createElement("button")

        // Configurar classes e conteúdo para os elementos criados

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `<i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>`
        checkButton.setAttribute("data-action", "checkButton")
        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)

        containerEdit.className = "editContainer"
        li.appendChild(containerEdit)

        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editInput"
        inputEdit.value = obj.name

        containerEdit.appendChild(inputEdit)

        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)

        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "containerCancelButton")
        containerEdit.appendChild(containerCancelButton)

        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteButton)

        return li
    }

    // Função para renderizar as tarefas na lista
    function renderTasks() {
        ul.innerHTML = ""
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTask(task))
        })
    }

    // Função para adicionar uma tarefa ao array e atualizar a visualização
    function addTask(task) {
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })

        setNewData()
    }

    // Função chamada quando há um clique na lista de tarefas (ul)
    function clickedUl(event) {
        const dataAction = event.target.getAttribute("data-action")

        if (!dataAction) return

        let currentLi = event.target

        // Encontrar o elemento li atual subindo na hierarquia até atingir um elemento li
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }

        // Obter o índice da tarefa na lista de tarefas
        const currentLiIndex = [...li].indexOf(currentLi)

        // Objeto que mapeia ação (data-action) para a função correspondente
        const actions = {
            checkButton: function(){
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed
                if(arrTasks[currentLiIndex].completed){
                    currentLi.querySelector(".fa-check").classList.remove("displayNone")
                }else{
                    currentLi.querySelector(".fa-check").classList.add("displayNone")
                }
                renderTasks()
                setNewData()
            },
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                // Esconder outros contêineres de edição antes de exibir o atual
                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                })

                editContainer.style.display = "flex"

            },
            containerEditButton: function () {
                const val = currentLi.querySelector(".editInput").value
                arrTasks[currentLiIndex].name = val
                renderTasks()
                setNewData()
            },
            containerCancelButton: function () {
                // Restaurar o valor original e esconder o contêiner de edição
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name
            },
            deleteButton: function () {
                // Remover a tarefa do array e atualizar a visualização
                arrTasks.splice(currentLiIndex, 1)
                renderTasks()
                setNewData()
            }
        }

        // Executar a ação correspondente, se existir
        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }

    // Acrescentar li no submit do formulário
    todoAddForm.addEventListener("submit", function (event) {
        event.preventDefault()
        addTask(itemInput.value)
        renderTasks()
        itemInput.value = ""
        itemInput.focus()
    });

    // Adicionar um evento de clique na lista de tarefas (ul)
    ul.addEventListener("click", clickedUl)

    // Renderizar as tarefas ao carregar a página
    renderTasks()
})()