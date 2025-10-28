// criem uma lista de objetos e esse objeto seja a representação do aluno.
// essa representação deve ter nome, matrícula e notas.
// pelo menos 5 alunos
// calculem a média geral da turma, somente dos alunos que tiverem media acima de 7.
//  sem for map, filter, reduce

let listaAlunos = [
    {nome: "Craudinho", matricula : 153654852, notas : [70,91,57]},
    {nome: "Luquinhas da Pinha", matricula : 987456354, notas : [40,60,87]},
    {nome: "Sansiro Ademiro", matricula : 1259855636, notas : [24,100,30]},
    {nome: "Rogerio", matricula : 2589631457, notas : [98,70,84]},
    {nome: "Marcelus`bar", matricula : 123265829, notas : [100,100,95]}
]

let medias = listaAlunos.map(aluno => {
    let media = aluno.notas.reduce((acumulador, nota) => acumulador + nota, 0) / aluno.notas.length
    return { ...aluno, media: media.toFixed(2) }
})

let notasAcima = medias.filter(aluno => {
    return aluno.media > 70
})

console.log(notasAcima);

