<script>
let numero = parseInt(prompt("Informe um número ou 0 para encerrar"));
let soma = 0;

while (numero > 0) {
    document.write(numero + "<br>");
    soma = soma + numero;
    numero = parseInt(prompt("Informe um número ou 0 para encerrar"));
}

document.write("Somatória: " + soma + "<br>");
</script>
