function criarLista(inicial, final) {
  var lista = [];
  for (var i = inicial; i <= final; i++) {
    lista.push(i);
  }

  return lista;
}

var numeroInicial = parseInt(prompt("Número inicial:"));
var numeroDesejado = parseInt(prompt("Número final:"));
var numeros = criarLista(numeroInicial, numeroDesejado);

var numeroMaximoLinhas = 25;
var numeroLayouts = Math.ceil(numeros.length / numeroMaximoLinhas);

var container = document.createElement("div");
container.className = "layout-container";

for (var i = 0; i < numeroLayouts; i++) {
  var layoutHTML = `
    <div class="main-card">
      <header>
        <div class="d-flex">
          <div class="left">
            <img src="olavo.png">
          </div>
          <div class="right">
            A APP da EEBP Olavo Cecco Rigon promove uma <b>AÇÃO ENTRE AMIGOS</b>, em prol de projetos da escola. Como retribuição serão sorteados
          </div>
        </div>
        <div class="prize-list"> 
            <ol>
              <b>
                <li>° Prêmio – R$ 1.000, Mil Reais em dinheiro</li>
                <li>º Prêmio – R$ 500, Quinhentos reais em dinheiro</li>
                <li>º Prêmio – R$ 300, Trezentos reais em dinheiro</li>
              </b>
            </ol>
        </div>

      <b><p align="center">Valor da contribuição: R$ 5,00</p></b> 
      </header>
      <table>
        <tr>
          <th class="numero">Nº</th>
          <th class="nome">Nome</th>
          <th class="fone">Celular</th>
        </tr>
      </table>
    </div>
      <footer>
        <p align="center">Desde de já agradecemos sua colaboração.</p>
      </footer>
  `;

  var layout = document.createElement("div");
  layout.innerHTML = layoutHTML.trim();
  layout.className = "layout";

  var tabela = layout.querySelector("table");
  var tbody = tabela.querySelector("tbody");

  var inicio = i * numeroMaximoLinhas;
  var fim = (i + 1) * numeroMaximoLinhas;

  var numerosLayout = numeros.slice(inicio, fim);

  numerosLayout.forEach(function (final) {
    var linha = document.createElement("tr");

    var colunaNumero = document.createElement("td");
    colunaNumero.textContent = final;
    linha.appendChild(colunaNumero);

    var colunaNome = document.createElement("td");
    linha.appendChild(colunaNome);

    var colunaCelular = document.createElement("td");
    linha.appendChild(colunaCelular);

    tbody.appendChild(linha);
  });

  container.appendChild(layout);
}

document.body.appendChild(container);
