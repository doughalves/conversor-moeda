function Converter() {
  var valorEmReal = parseFloat(document.getElementById("valor").value);

  //Conversão em Dolar
  var conversaoDolar = (valorEmReal / 5.49);
  var valorEmDolar = conversaoDolar.toFixed(2);

  // Enviando Resultado para HTML
  var elementoValorConvertido = document.getElementById("valorDolar");
  var valorDolar = '<div class="resultado"><img src="https://cdn.pixabay.com/photo/2017/11/08/22/27/dollar-2931882_640.png" width= 10%>' + "  O resultado em Dolar é $ " + valorEmDolar + '</div>'
  elementoValorConvertido.innerHTML = valorDolar;

  //Conversão Euro
  var conversaoEmEuro = (valorEmReal / 6.35);
  var valorEmEuro = conversaoEmEuro.toFixed(2);

  // Enviando Resultado para HTML
  var elementoValorConvertido = document.getElementById("valorEuro");
  var valorEuro = '<div class="resultado"><img src="https://cdn.pixabay.com/photo/2017/10/16/23/14/euro-2859039_1280.png" width= 10%>' + "  O resultado em Euro é € " + valorEmEuro + '</div>'
  elementoValorConvertido.innerHTML = valorEuro;


  //Conversão Bitcoin
  var valorBitcoin = valorEmReal * 0.0000033;

  // Enviando Resultado para HTML
  var elementoValorConvertido = document.getElementById("valorBitcoin");
  var valorBitcoin = '<div class="resultado"><img src="https://acionistadevalor.com.br/wp-content/uploads/2021/02/como-investir-em-bitcoin-passo-a-passo.png" width= 10%>' + "  O resultado em ₿ " + valorBitcoin + '</div>'
  elementoValorConvertido.innerHTML = valorBitcoin;
}
