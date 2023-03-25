 <h1>Did You Find My Pet</h1>
  <p>Did You Find My Pet é uma aplicação web que permite registrar informações sobre um animal de estimação perdido e gerar um QR Code para adesivar na coleira do animal. Quando alguém encontra o animal perdido e lê o QR Code, é levado a uma página onde pode enviar sua localização e mandar uma mensagem para o tutor do animal.</p>
  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li>React</li>
    <li>Node</li>
    <li>MySQL</li>
    <li>Sequelize</li>
    <li>Tailwind CSS</li>
    <li>TypeScript</li>
  </ul>
  <h2>Funcionalidades</h2>
  <ul>
    <li>Cadastro de informações sobre o animal perdido, incluindo nome, raça, cor, porte, características, foto e informações de contato do tutor;</li>
    <li>Geração de QR Code para ser adesivado na coleira do animal;</li>
    <li>Leitura do QR Code por alguém que encontrou o animal perdido;</li>
    <li>Redirecionamento para uma página onde é possível enviar localização e mensagem para o tutor do animal.</li>
  </ul>
  <h2>Instalação</h2>
  <p>Para instalar e executar a aplicação, siga os seguintes passos:</p>
  <ol>
    <li>Clone o repositório:</li>
    <code>git clone https://github.com/RasecMH/DidYouFindMyPet.git</code>
    <li>Instale as dependências:</li>
    <code>npm install</code>
    <li>Configure o banco de dados no arquivo <code>.env</code></li>
    <li>Rode as migrations do banco de dados:</li>
    <code>npm run db:reset</code>
    <li>Inicie a aplicação:</li>
    <code>npm start</code>
  </ol>
  <p>Com docker:</p>
  <ol>
    <li>Clone o repositório:</li>
    <code>git clone https://github.com/RasecMH/DidYouFindMyPet.git</code>
    <li>Rode o comando:</li>
    <code>npm run compose:up</code>
  </ol>
  <h2>Contribuição</h2>
  <p>Contribuições são sempre bem-vindas! Se você tiver alguma sugestão ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.</p>
  <h2>Licença</h2>
  <p>Este projeto está licenciado sob a licença MIT.</p>
