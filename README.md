# Mini API de Tarefas em Tempo Real

Projeto simples usando **Node.js**, **Express**, **Socket.io** e **SQLite** para criar uma API de tarefas com:
- Criação e listagem de tarefas
- Atualização de status (concluído)
- Tempo real com socket
- Exportação de dados em .json e .csv
- Front-end HTML integrado

---

## Tecnologias utilizadas

- Node.js
- Express
- Socket.io
- SQLite3
- HTML5 + JS vanilla

---

## Estrutura do Projeto
mini-api-tarefas/
├── index.js # Servidor Node + rotas + socket
├── db.js # Conexão com SQLite e criação da tabela
├── index.html # Front-end básico
├── tarefas.db # Banco de dados local (gerado automaticamente)
├── package.json


---

## Como rodar o projeto localmente

1. Clone o repositório
bash
git clone https://github.com/seu-usuario/seu-repo.git
cd mini-api-tarefas

2. instale as dependencias
npm install

3. inicie o servidor
npm start

4. Acesse o navegador
http://localhost:3000

Rotas da API
GET /tarefas
Lista todas as tarefas.

POST /tarefas
Cria nova tarefa.
Body JSON:
{ "titulo": "Nova tarefa" }

PUT /tarefas/:id/concluir
Marca a tarefa como concluída.

GET /export/json
Baixa todas as tarefas em formato .json.

GET /export/csv
Baixa todas as tarefas em formato .csv.

Funcionalidades no Front-end
Visualização das tarefas em tempo real

Formulário para adicionar tarefas

Botões para marcar como concluída

Botões para exportar em .json e .csv

![{807D9A31-21D7-4908-AB46-7D8F6B6ECA82}](https://github.com/user-attachments/assets/590bd15d-b5aa-4d2c-bcd9-481d927e9cc0)

![{BD62E30A-8A82-4C45-93E3-E59FC588B07D}](https://github.com/user-attachments/assets/e3eb523b-34d6-47e4-9c47-aa57edafbaf5)

![{E4CCAA30-C447-4990-825E-5D6CAB5C3434}](https://github.com/user-attachments/assets/7465c3ce-d175-4c6e-9b91-d80305e5c7bd)

![{F38168C1-9E96-4832-B643-FF693BA75B11}](https://github.com/user-attachments/assets/70d8bb87-dfec-4c6c-bdd3-ad0cf3a7c557)

![{91C82B29-CB60-4670-B481-088E1C1FEC20}](https://github.com/user-attachments/assets/5b48b48b-9059-4b9a-9c16-dd5552398489)




