<script>
let nota1 = parseFloat(prompt("Informar 1a nota"));
let nota2 = parseFloat(prompt("Informar 2a nota"));
let nota3 = parseFloat(prompt("Informar 3a nota"));

let media = (nota1 + nota2 + nota3) / 3; 

document.write("Media: " + media + "<br>"); // exibe uma mensagem de texto na tela

if (media >= 6){
     document.write("Situação: Aprovado!");
} else if (media >= 3 && media < 6){
     document.write("Situação: Exame!");
} else {
     document.write("Situação: Reprovado!");
}
</script>
