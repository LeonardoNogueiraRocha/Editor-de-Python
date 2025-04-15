
# Editor Python com React

## Descrição

Este projeto é um **Editor Python** interativo criado com **React**, permitindo que os usuários escrevam e executem código Python diretamente no navegador. O projeto também inclui tutoriais interativos para aprender conceitos básicos da linguagem Python, como Strings, Inteiros, Floats, Condições, Loops e Funções.

## Funcionalidades

- **Editor Python**: Utilize o editor interativo com o serviço **Trinket.io** para escrever e executar código Python diretamente no navegador.
- **Tutoriais Interativos**: Aprenda os conceitos principais de Python com tutoriais fáceis de seguir.
  - **Strings**: Manipulação de texto.
  - **Inteiros**: Trabalhando com números inteiros.
  - **Floats**: Manipulação de números de ponto flutuante.
  - **If / Else**: Estruturas de decisão.
  - **Loops**: Laços de repetição.
  - **Funções**: Criando e utilizando funções em Python.
- **Navegação Simples**: Interface intuitiva com uma barra lateral para navegar pelas páginas do editor e tutoriais.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário interativas.
- **Trinket.io**: Plataforma para execução de código Python diretamente no navegador.
- **CSS**: Estilização da interface do projeto.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar o projeto

```bash
npm start
```

O projeto estará acessível em [http://localhost:3000](http://localhost:3000).

## Como Funciona

- **Página Inicial**: Exibe um botão para acessar o editor Python e navegar pelos tutoriais.
- **Editor**: Permite que você escreva e execute código Python no navegador usando o **Trinket.io**.
- **Tutoriais**: Cada tutorial apresenta um conceito do Python com exemplos prontos para executar no editor.

## Hospedagem

Se você deseja tornar a aplicação acessível fora da rede local, você pode usar ferramentas como **ngrok** ou hospedar o projeto em plataformas como **Vercel**, **Netlify** ou **GitHub Pages**.

### Usando ngrok

1. Instale o [ngrok](https://ngrok.com/).
2. Abra o terminal e execute o comando abaixo para criar um túnel para a porta 3000:

```bash
ngrok http 3000
```

3. O ngrok fornecerá um link público para acessar o projeto.

### Hospedando na Vercel

1. Crie uma conta no [Vercel](https://vercel.com/).
2. Instale o [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm install -g vercel
```

3. Faça o deploy do seu projeto com o seguinte comando:

```bash
vercel
```

4. O Vercel fornecerá um link público para a sua aplicação.

## Contribuindo

Contribuições são bem-vindas! Para contribuir, siga os passos abaixo:

1. Faça um **fork** do repositório.
2. Crie uma **branch** para suas alterações: `git checkout -b minha-modificacao`.
3. Faça as alterações e envie um **pull request**.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
