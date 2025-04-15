import React from 'react';

export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={() => setPage('home')}>🏠 Início</li>
        <li onClick={() => setPage('editor')}>💻 Editor Python</li>
        <h2>📚 Tutorial Python</h2>
        <li onClick={() => setPage('string')}>📝 Strings</li>
        <li onClick={() => setPage('int')}>🔢 Inteiros</li>
        <li onClick={() => setPage('float')}>📏 Floats</li>
        <li onClick={() => setPage('ifelse')}>🔄 If / Else</li>
        <li onClick={() => setPage('loops')}>🔁 Loops</li>
        <li onClick={() => setPage('funcoes')}>🛠️ Funções</li>
        <li onClick={() => showPage('meucodigo')}>📝 Meu Código</li>
      </ul>
    </div>
  );
}
