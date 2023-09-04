const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();

const db = mysql.createConnection({
  host: '11-25-603s',
  user: 'DBMS',
  password: 'DBMS',
  database: 'project',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(express.json());

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Registration error:', err);
      res.status(500).json({ error: 'Registration failed' });
    } else {
      res.status(201).json({ message: 'Registration successful' });
    }
  });
});

app.post('/api/login', (req, res) => {
  const { usernameOrEmail, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? OR email = ?';
  db.query(sql, [usernameOrEmail, usernameOrEmail], (err, result) => {
    if (err) {
      console.error('Login error:', err);
      res.status(500).json({ error: 'Login failed' });
    } else if (result.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      const user = result[0];
      if (bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  });
});
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Registration error:', err);
      res.status(500).json({ success: false, message: 'Registration failed' });
    } else {
      res.status(201).json({ success: true, message: 'Registration successful' });
    }
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
