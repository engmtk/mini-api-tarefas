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
comando npm install

3. inicie o servidor
comando npm start

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


