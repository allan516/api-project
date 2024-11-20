<!DOCTYPE html>
<html lang="pt-BR">
<body>
  <h1>Consulta de CEP com Angular</h1>
  <p>
    Este projeto é uma aplicação Angular que consome a API 
    <a href="https://viacep.com.br" target="_blank">ViaCEP</a> para buscar dados de endereços a partir de um CEP informado.
    A aplicação permite ao usuário preencher o CEP em um campo de texto e, ao buscar, os outros campos do endereço, 
    como logradouro, bairro, cidade e estado, são preenchidos automaticamente.
  </p>
  
  <hr>

  <h2>Demonstração</h2>
  <div>
   <img src="./src/assets/api-project.gif"/>
  </div>
  
  <hr>

  <h2>Funcionalidades</h2>
  <ul>
    <li>Permite ao usuário inserir um CEP.</li>
    <li>Faz a busca na API ViaCEP.</li>
    <li>Preenche automaticamente os campos do formulário com os dados retornados pela API.</li>
  </ul>
  
  <hr>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>Angular</strong></li>
    <li><strong>TypeScript</strong></li>
    <li><strong>Bootstrap</strong></li>
  </ul>
  
  <hr>

  <h2>API Utilizada</h2>
  <p>
    A aplicação utiliza a API pública <a href="https://viacep.com.br" target="_blank">ViaCEP</a> para obter informações de endereço com base no CEP.
    A API retorna os seguintes dados:
  </p>
  <ul>
    <li>CEP</li>
    <li>Logradouro</li>
    <li>Complemento</li>
    <li>Bairro</li>
    <li>Localidade (Cidade)</li>
    <li>UF (Estado)</li>
  </ul>
</body>
</html>
