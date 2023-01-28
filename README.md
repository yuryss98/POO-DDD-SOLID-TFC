# Boas vindas ao repositório do projeto POO-SOLID-DDD-TFC!

---

Este foi um projeto desenvolvido na Trybe, cujo nome original é Trybe Futebol Clube (TFC). O TFC é um site informativo sobre partidas e classificações de futebol! soccer.

O Front-end desse projeto ja foi provido pela Trybe, minha responsabilidade era desenvolver uma API fazendo testes de integração (E2E) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Nesse projeto construi o Back-end dockerizado utilizando modelagem de dados através do Sequelize.

Para desenvolver o Back-end optei por usar o paradigma da orientação a objeto (POO), seguindo os principios do SOLID, e aproveitei tambem para colocar em pratica meus conhecimentos sobre DDD (Domain Driven Designer), dai o nome de (POO-SOLID-DDD-TFC).

Desenvolvi endpoints que estão conectados ao banco de dados seguindo os princípios do REST;


## 🛠 Tecnologias usadas:

* TypeScript;
* Docker;
* Express;
* Node;
* Mysql2;
* Bcryptjs;
* cors;
* Express-async-errors;
* Mocha;
* Chai;
* Jsonwebtoken;
* Sequelize;

## Execute localmente:

Clone o projeto
```bash
git clone git@github.com:yuryss98/POO-DDD-SOLID-TFC.git
```

Vá para o diretório do projeto:
```bash
cd POO-DDD-SOLID-TFC
```

Entre no Vs Code para verificar os arquivos usando o atalho no terminal:
```bash
code .
```

Abra O terminal e execute os comandos:
```bash
  npm run compose:up -- --build
```
  *Ou caso queria executar em modo de desenvolvimento

```
 npm run compose:up:dev -- --build
```
## Esses dois comandos acima vao subir 3 containers docker, um para a aplicação Front-end, outro para o Back-end e por fim um para o Banco de Dados

## Depois que os containers subirem, pode acessar a rota: http://localhost:3000/login para vizualizar o funcionamento da aplicação

## Para fazer login use:
  -- email: user@user.com
 
  -- password: secret_user
  
## Feito isso, pode testar a aplicação Front-end


## Caso queira executar os testes E2E do Back-end e suas coberturas:

```bash  
docker exec -it app_backend sh
```

```bash
npm test
```

```bash
npm run test:coverage
```


## Endpoints do Back-end caso queira testar usando algum framework Open Source para desenvolvimento/teste de API Clients, como Thunder Client, Insomnia, dentre outros: todos os endpoints são acessiveis a partir da rota http://localhost:3001

  <details close>
  <summary>POST /login</summary>
  -- O método POST em /login é usado para fazer login na aplicação, quando passado um usuario e senha corretos, retorna um token, esse token deve ser usado em algumas rotas da aplicação, esse endpoint aceita 2 campos, sendo eles:
  
  -- email: campo do tipo email - CAMPO OBRIGATORIO
  
  -- password: campo do tipo texto - CAMPO OBRIGATORIO
  
  EXEMPLO:
  ```
  {
    "email": "user@user.com",
    "password": "secret_user"
  }
  ```
  
  ```
  {
    "email": "admin@admin.com",
    "password": "secret_admin"
  }
```
  
  </details>
  
  <details close>
  <summary>GET /login/validate</summary>
  -- O método GET em /login/validate é usado para validar o token do usuario, se for um token valido, retorna a role do usuario, o token deve
  ser passado no header da requisição, na chave Authorization
  
  </details>
  
  <details close>
  
  <summary>GET /teams</summary>
  
  -- O método GET em /teams é usado para listar todos os times da aplicação;
  
  </details>
  
  <details close>
  
  <summary>GET /teams/id</summary>
  
  -- O método GET em /teams/id é usado para listar um time atraves do seu id;
  
  </details>
  
  <details close>
  
  <summary>GET /matches</summary>
  
  -- O método GET em /matches é usado para listar todas as partidas;
  
  </details>
  
  <details close>
  
  <summary>GET /matches?inProgress=false</summary>
  
  -- O método GET em /matches?inProgress=false é usado para listar todas as partidas finalizadas;
  
  </details>
  
  <details close>
  
   <summary>GET /matches?inProgress=true</summary>
  
  -- O método GET em /matches?inProgress=true é usado para listar todas as partidas em andamento;
  
  </details>
  
  <details close>
  
  <summary>GET /leaderboard</summary>
  
  -- O método GET em /leaderboard é usado para listar a classificação geral das equipes;
  
  </details>
  
  <details close>
  
  <summary>GET /leaderboard/home</summary>
  
  -- O método GET em /leaderboard/home é usado para listar a classificação das equipes jogando em casa
  
  </details>
  
  <details close>
  
  <summary>GET /leaderboard/away</summary>
  
  -- O método GET em /leaderboard/away é usado para listar a classificação das equipes jogando como visitante
  
  </details>
  
  <details close>
  
  <summary>POST /matches</summary>
  
  -- O método POST em /matches é usado para criar uma nova partida
  
  esse endpoint aceita 4 campos, sendo eles:

  
  -- homeTeamGoals: campo do tipo number - CAMPO OBRIGATORIO
  
  -- awayTeamGoals: campo do tipo number - CAMPO OBRIGATORIO
  
   -- homeTeamId: campo do tipo number - CAMPO OBRIGATORIO
  
   -- awayTeamId: campo do tipo number - CAMPO OBRIGATORIO
  
  EXEMPLO:
  ```
  {
    "homeTeamGoals": 10,
    "awayTeamGoals": 20,
    "homeTeamId": 5,
    "awayTeamId": 10
  }
  
  ```
  
  </details>
  
  <details close>
  
  <summary>PATCH /matches/id</summary>
  
  -- O método PATCH em /matches/id é usado para atualizar o estado da partida em andamento
  
  esse endpoint aceita 2 campos, sendo eles:

  
  -- homeTeamGoals: campo do tipo number - CAMPO OBRIGATORIO
  
  -- awayTeamGoals: campo do tipo number - CAMPO OBRIGATORIO
  
  
  EXEMPLO:
  ```
  {
    "homeTeamGoals": 10,
    "awayTeamGoals": 20
  }
  
  ```
  
  </details>
  
  <details close>
  
  <summary>PATCH /matches/id/finish</summary>
  
  -- O método PATCH em /matches/id/finish é usado para finalizar uma partida em andamento
  
  esse endpoint só precisa do id de uma partida em andamento em sua rota
  
  </details>
  
  
  
