<h1>Carrinho de Compras</h1>
<p>Este é um projeto simples de um carrinho de compras, feito para ser facilmente integrado em qualquer aplicação web.</p>

<h2>Início</h2>
<p>Estas instruções fornecerão uma cópia do projeto em funcionamento na sua máquina local para fins de desenvolvimento e testes.</p>

<h3>Pré-requisitos</h3>
<p>Antes de começar, certifique-se de que você tenha o seguinte instalado em sua máquina:</p>
<ul>
  <li><a href="https://nodejs.org">Node.js</a></li>
</ul>

<h3>Instalação</h3>
<ol>
  <li>Faça o clone do repositório:</li>
  <pre><code>git clone https://github.com/rafasdiass/cart.git</code></pre>
  <li>Entre na pasta do projeto:</li>
  <pre><code>cd cart</code></pre>
</ol>

<h2>Uso</h2>
<p>No arquivo <code>main.js</code>, você pode adicionar itens ao carrinho, como:</p>

<pre><code>
const cart = new CartService();
cart.addItem(new CartItem("1", "Apple", 1.99, 2));
console.log(cart.getSubtotal());  // Saída: 3.98
</code></pre>

<p>O HTML do carrinho pode ser personalizado conforme a necessidade da sua aplicação.</p>

<h2>Contribuição</h2>
<p>Pull requests são bem-vindos. Para mudanças significativas, abra um problema primeiro para discutir o que você gostaria de mudar.</p>

<p>Espero que você ache este repositório útil!</p>
