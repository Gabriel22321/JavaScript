let listaDeEstudantes = ["Helena", "Chico", "Mário", "José", "Maria"];

function adicionarAluno(nome) {
  if (listaDeEstudantes.length < 5) {
    listaDeEstudantes.push(nome);
    console.log(`Aluno(a) ${nome} foi adicionado(a).`);
  } else {
    console.log("Não é possível inserir mais alunos nessa turma");
  }
  console.log("Lista atual de estudantes:", listaDeEstudantes);
}

adicionarAluno("João"); 
