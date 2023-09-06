const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hsgaargauost',
  database: 'krankenhausdb'
});

app.get('/patienten', (req, res) => {
  connection.query('SELECT * FROM Patienten', (queryErr, results) => {
    if (queryErr) {
      console.error('Fehler bei der Abfrage: ', queryErr);
      res.status(500).json({ error: 'Fehler bei der Abfrage' });
    } else {
      res.json(results);
    }
  });
});

app.get('/arzte', (req, res) => {
  connection.query('SELECT * FROM Ärzte', (queryErr, results) => {
    if (queryErr) {
      console.error('Fehler bei der Abfrage: ', queryErr);
      res.status(500).json({ error: 'Fehler bei der Abfrage' });
    } else {
      res.json(results);
    }
  });
});

app.get('/abteilungen', (req, res) => {
  connection.query('SELECT * FROM Abteilungen', (queryErr, results) => {
    if (queryErr) {
      console.error('Fehler bei der Abfrage: ', queryErr);
      res.status(500).json({ error: 'Fehler bei der Abfrage' });
    } else {
      res.json(results);
    }
  });
});

app.get('/zimmer', (req, res) => {
  connection.query('SELECT * FROM Zimmer', (queryErr, results) => {
    if (queryErr) {
      console.error('Fehler bei der Abfrage: ', queryErr);
      res.status(500).json({ error: 'Fehler bei der Abfrage' });
    } else {
      res.json(results);
    }
  });
});

app.get('/behandlungen', (req, res) => {
  connection.query('SELECT * FROM Behandlungen', (queryErr, results) => {
    if (queryErr) {
      console.error('Fehler bei der Abfrage: ', queryErr);
      res.status(500).json({ error: 'Fehler bei der Abfrage' });
    } else {
      res.json(results);
    }
  });
});

app.get('/behandlungen_patienten', (req, res) => {
  connection.query('SELECT * FROM Behandlungen_Patienten', (queryErr, results) => {
    if (queryErr) {
      console.error('Fehler bei der Abfrage: ', queryErr);
      res.status(500).json({ error: 'Fehler bei der Abfrage' });
    } else {
      res.json(results);
    }
  });
});

app.get('/behandlungen_arzte', (req, res) => {
  connection.query('SELECT * FROM Behandlungen_Ärzte', (queryErr, results) => {
    if (queryErr) {
      console.error('Fehler bei der Abfrage: ', queryErr);
      res.status(500).json({ error: 'Fehler bei der Abfrage' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
