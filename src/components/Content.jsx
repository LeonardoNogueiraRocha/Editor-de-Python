import React from 'react';
import Page from './Page';

const tutorials = {
  string: {
    title: 'Tutorial: Strings',
    content: 'Strings são sequências de caracteres, usadas para armazenar texto.',
    code: 'print("Hello, World!")',
  },
  int: {
    title: 'Tutorial: Inteiros',
    content: 'Os inteiros (int) são números sem parte decimal.',
    code: 'numero = 10\nprint(numero)',
  },
  float: {
    title: 'Tutorial: Floats',
    content: 'Os números de ponto flutuante (float) possuem casas decimais.',
    code: 'preco = 10.99\nprint(preco)',
  },
  ifelse: {
    title: 'Tutorial: If / Else',
    content: 'O if/else é usado para tomar decisões com base em condições.',
    code: 'idade = 18\nif idade >= 18:\n    print("Maior de idade")\nelse:\n    print("Menor de idade")',
  },
  loops: {
    title: 'Tutorial: Loops',
    content: 'Os loops são usados para executar repetidamente um bloco de código.',
    code: 'for i in range(5):\n    print(i)',
  },
  funcoes: {
    title: 'Tutorial: Funções',
    content: 'Funções são blocos reutilizáveis de código.',
    code: 'def saudacao():\n    print("Olá, Mundo!")\n\nsaudacao()',
  },
};

export default function Content({ currentPage }) {
  if (currentPage === 'home') {
    return (
      <div className="content">
        <h1>Bem-vindo ao Editor Python</h1>
        <p>Experimente escrever e executar código Python diretamente no navegador!</p>
        <a className="btn" onClick={() => window.scrollTo(0, 0)}>Ir para o Editor</a>
      </div>
    );
  }

  if (currentPage === 'editor') {
    return (
      <div className="content">
        <h1>Editor Python Trinket</h1>
        <iframe
          src="https://trinket.io/embed/python3"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (tutorials[currentPage]) {
    const { title, content, code } = tutorials[currentPage];
    return (
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
        <pre>{code}</pre>
        <a className="btn" onClick={() => window.scrollTo(0, 0)}>Agora é a sua vez</a>
      </div>
    );
  }

  return null;
}
