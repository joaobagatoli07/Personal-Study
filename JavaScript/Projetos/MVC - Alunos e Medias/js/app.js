const alunos = [
    {
        _id: 0,
        nome: "chico melato",
        notas: {
            portugues: [1, 1, 2, 2],
            matematica: [2, 2, 2, 2],
            historia: [2, 2, 3, 3],
            ciencias: [3, 3, 3, 3],
        },
    },
    {
        _id: 1,
        nome: "talita lima",
        notas: {
            portugues: [4, 4, 4, 4],
            matematica: [4, 4, 5, 5],
            historia: [5, 5, 6, 6],
            ciencias: [7, 7, 8, 9],
        },
    },
];

alunos.forEach(aluno => {
    aluno.media = {}

    for (let materia in aluno.notas) {
        aluno.media[materia] = average(...aluno.notas[materia])
    }
})

console.log(alunos)