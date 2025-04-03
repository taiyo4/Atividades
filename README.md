<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechConnect</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>TechConnect</h1>
      </header>

      <section id="sobre">
        <h2>Sobre o Evento</h2>
        <p><strong>Data:</strong> 15 de maio de 2025</p>
        <p><strong>Local:</strong> Centro de Convenções TechConnect</p>
        <p><strong>Resumo:</strong> O evento vai reunir especialistas em tecnologia e design para discutir as últimas tendências do setor.</p>
      </section>

      <section id="palestrantes">
        <h2>Palestrantes</h2>
        <div class="palestrante">
          <img src="palestrante1.jpg" alt="Palestrante 1">
          <p><strong>João Silva</strong></p>
          <p>Especialista em Design de Interfaces, com mais de 10 anos de experiência na criação de soluções inovadoras.</p>
        </div>

        <div class="palestrante">
            <img src="palestrante2.jpg" alt="Palestrante 2">
            <p><strong>Ricardo Almeida</strong></p>
            <p>Desenvolvedor Full Stack com uma vasta experiência em criar soluções escaláveis e robustas para startups tecnológicas.</p>
          </div>

          <div class="palestrante">
            <img src="palestrante3.jpg" alt="Palestrante 3">
            <p><strong>Lucas Pereira</strong></p>
            <p>Desenvolvedor front-end, apaixonado por tecnologias emergentes e otimização de performance em aplicações web.</p>
          </div>
      </section>

      <section id="inscricao">
        <h2>Inscrição</h2>
        <form action="/submit" method="POST">
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required>
      
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>
      
          <label for="ingresso">Tipo de ingresso:</label>
          <input type="radio" id="presencial" name="ingresso" value="presencial" required>
          <label for="presencial">Presencial</label>
          <input type="radio" id="online" name="ingresso" value="online" required>
          <label for="online">Online</label>
      
          <label for="termos">
            <input type="checkbox" id="termos" name="termos" required>
            Aceito os termos e condições
          </label>
      
          <button type="submit">Inscrever-se</button>
        </form>
      </section>
</body>
</html>


/* Paleta de cores */
:root {
    --cor-principal: #005b96;
    --cor-secundaria: #ffd700;
    --cor-fundo: #f5f5f5;
    --cor-texto: #333;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    margin: 0;
    padding: 0;
  }
  
  header {
    background-color: var(--cor-principal);
    color: white;
    text-align: center;
    padding: 20px 0;
  }
  
  h2 {
    color: var(--cor-principal);
  }
  
  section {
    padding: 20px;
    margin: 20px 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  button {
    background-color: var(--cor-secundaria);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ffcc00;
  }
  
  /* Responsividade */
  @media (max-width: 768px) {
    header h1 {
      font-size: 24px;
    }
  
    section {
      padding: 15px;
    }
  }
