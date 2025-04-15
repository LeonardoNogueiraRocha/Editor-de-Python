import React, { useState } from 'react';
import './App.css'; // Certifique-se de que você tenha a folha de estilo para os botões e outros elementos

function App() {
  const [page, setPage] = useState('home'); // Definir qual página está ativa

  const showPage = (pageId) => {
    setPage(pageId); // Mudar a página ativa
  };

  return (
    <div className="App">
      {/* Sidebar já existente */}
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li onClick={() => showPage('home')}>🏠 Início</li>
          <li onClick={() => showPage('editor')}>💻 Editor Python</li>
          <h2>📚 Tutorial Python</h2>
          <li onClick={() => showPage('string')}>📝 Strings</li>
          <li onClick={() => showPage('int')}>🔢 Inteiros</li>
          <li onClick={() => showPage('float')}>📏 Floats</li>
          <li onClick={() => showPage('ifelse')}>🔄 If / Else</li>
          <li onClick={() => showPage('loops')}>🔁 Loops</li>
          <li onClick={() => showPage('funcoes')}>🛠️ Funções</li>
        </ul>
      </div>

      {/* Conteúdo da Página */}
      <div className="content" style={{ marginLeft: '250px', padding: '20px' }}>
        {/* Página Inicial */}
        {page === 'home' && (
          <div id="home">
            <h1>Bem-vindo ao Editor Python</h1>
            <p>Experimente escrever e executar código Python diretamente no navegador!</p>
            <button className="btn" onClick={() => showPage('editor')}>Ir para o Editor</button>
          </div>
        )}

        {/* Página do Editor Python */}
        {page === 'editor' && (
          <div id="editor">
            <h1>Editor Python Trinket</h1>
            <iframe src="https://trinket.io/embed/python3" loading="lazy" allowFullScreen></iframe>
          </div>
        )}

        {/* Tutorial: Strings */}
        {page === 'string' && (
          <div id="string">
            <h1>Tutorial: Strings</h1>
            <p>Strings são sequências de caracteres, usadas para armazenar texto.</p>
            <pre>print("Hello, World!")</pre>
            <button className="btn" onClick={() => showPage('editor')}>Agora é a sua vez</button>
          </div>
        )}

        {/* Tutorial: Inteiros */}
        {page === 'int' && (
          <div id="int">
            <h1>Tutorial: Inteiros</h1>
            <p>Os inteiros (int) são números sem parte decimal.</p>
            <pre>numero = 10
print(numero)</pre>
            <button className="btn" onClick={() => showPage('editor')}>Agora é a sua vez</button>
          </div>
        )}

        {/* Tutorial: Floats */}
        {page === 'float' && (
          <div id="float">
            <h1>Tutorial: Floats</h1>
            <p>Os números de ponto flutuante (float) possuem casas decimais.</p>
            <pre>preco = 10.99
print(preco)</pre>
            <button className="btn" onClick={() => showPage('editor')}>Agora é a sua vez</button>
          </div>
        )}

        {/* Tutorial: If / Else */}
        {page === 'ifelse' && (
          <div id="ifelse">
    <h1>Tutorial: If / Else</h1>
    <p>O if/else é usado para tomar decisões com base em condições.</p>
    <pre>
      {`idade = 18
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")`}
    </pre>
    <button className="btn" onClick={() => showPage('editor')}>Agora é a sua vez</button>
  </div>
        )}

        {/* Tutorial: Loops */}
        {page === 'loops' && (
          <div id="loops">
            <h1>Tutorial: Loops</h1>
            <p>Os loops são usados para executar repetidamente um bloco de código.</p>
            <pre>for i in range(5):
    print(i)</pre>
            <button className="btn" onClick={() => showPage('editor')}>Agora é a sua vez</button>
          </div>
        )}

        {/* Tutorial: Funções */}
        {page === 'funcoes' && (
          <div id="funcoes">
            <h1>Tutorial: Funções</h1>
            <p>Funções são blocos reutilizáveis de código.</p>
            <pre>def saudacao():
    print("Olá, Mundo!")

saudacao()</pre>
            <button className="btn" onClick={() => showPage('editor')}>Agora é a sua vez</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
