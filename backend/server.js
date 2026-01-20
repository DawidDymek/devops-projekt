const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

let db;

function connectWithRetry() {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  db.connect(err => {
    if (err) {
      console.error('Błąd połączenia z MySQL, spróbuję ponownie za 5 sekund:', err.message);
      setTimeout(connectWithRetry, 5000); // próba ponownie po 5 sekundach
    } else {
      console.log('✅ Połączono z MySQL');
    }
  });
}

connectWithRetry();

// testowy endpoint
app.get('/db', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.send('Backend działa');
});

app.listen(port, () => {
  console.log(`Backend działa na porcie ${port}`);
});
