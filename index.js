const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const db = require('./db');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// conexão com socket
io.on('connection', (socket) => {
  console.log('Cliente conectado');
});

// Listar tarefas
app.get('/tarefas', (req, res) => {
  db.all("SELECT * FROM tarefas ORDER BY created_at DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Criar tarefa
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body;
  db.run("INSERT INTO tarefas (titulo) VALUES (?)", [titulo], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    const novaTarefa = {
      id: this.lastID,
      titulo,
      concluido: 0,
      created_at: new Date().toISOString()
    };
    io.emit('novaTarefa', novaTarefa);
    res.status(201).json(novaTarefa);
  });
});

// Marcar tarefa como concluída
app.put('/tarefas/:id/concluir', (req, res) => {
  const id = req.params.id;
  db.run("UPDATE tarefas SET concluido = 1 WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, concluido: true });
  });
});

// Exportar como JSON
app.get('/export/json', (req, res) => {
  db.all("SELECT * FROM tarefas", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.setHeader('Content-Disposition', 'attachment; filename="tarefas.json"');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(rows, null, 2));
  });
});

// Exportar como CSV
app.get('/export/csv', (req, res) => {
  db.all("SELECT * FROM tarefas", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const header = "id,titulo,concluido,created_at\n";
    const csv = rows.map(t =>
      `${t.id},"${t.titulo}",${t.concluido},${t.created_at}`
    ).join("\n");

    res.setHeader('Content-Disposition', 'attachment; filename="tarefas.csv"');
    res.setHeader('Content-Type', 'text/csv');
    res.send(header + csv);
  });
});

// Inicia o servidor
server.listen(port, () => {
  console.log(`Servidor rodando com melhorias em http://localhost:${port}`);
});
