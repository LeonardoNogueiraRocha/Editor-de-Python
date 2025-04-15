import React, { useState, useEffect } from 'react';

export default function EditorPython() {
  const [code, setCode] = useState('');

  // Carrega o código salvo do localStorage ao abrir o editor
  useEffect(() => {
    const savedCode = localStorage.getItem('python-code');
    if (savedCode) {
      setCode(savedCode);
    }
  }, []);

  // Função para salvar o código no localStorage
  const salvarCodigo = () => {
    localStorage.setItem('python-code', code);
    alert('Código salvo!');
  };

  // Função para limpar o código
  const limparCodigo = () => {
    setCode('');
    localStorage.removeItem('python-code');
  };

  return (
    <div className="content">
      <h1>Editor Python Trinket</h1>
      <iframe 
        src="https://trinket.io/embed/python3" 
        loading="lazy" 
        allowfullscreen 
        style={{ width: '100%', height: '600px', border: 'none', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
      />
      <br />
      <textarea
        style={{ width: '100%', height: '300px', fontFamily: 'monospace', marginTop: '20px' }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Digite seu código Python aqui..."
      />
      <br />
      <button className="btn" onClick={salvarCodigo}>💾 Salvar Código</button>
      <button className="btn" onClick={limparCodigo}>🗑️ Limpar Código</button>
    </div>
  );
}
