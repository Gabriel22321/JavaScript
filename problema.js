<script>
   saldo = parseInt(prompt("Informar saldo inicial"));
   document.writeln("Saldo inicial: " + saldo + "<br>");

  encerrar = 'n';
   
  while(encerrar == "n") {
   tipo = parseInt(prompt("Informar o tipo de entrada: 1 para Entrada e 2 para Saida: ")); 
   quantidade = parseInt(prompt("Informar a quantidade: "));

   if (tipo == 1)  { 
   saldo = saldo + quantidade;
   document.writeln("Quantidade adicionada: " + quantidade + "<br>");
   }

   if (tipo == 2) {
    if (saldo >= quantidade) {
        saldo = saldo - quantidade;
        document.writeln ("Produtos vendidos: " + quantidade + "<br>");
   } else {
    document.writeln("Saída:", quantidade);
    document.writeln("Saldo Insuficiente");
    alert ("Saldo insuficiente");
   }
} 
   document.writeln("Saldo Atual: " + saldo + "<br>")
   encerrar = prompt("Deseja encerrar S (para SIM) ou N (para NÃO)");
}
   
</script>
