const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test',
  waitForConnections: true,
  connectionLimit: 10
});

app.get('/', (req, res) => {
  res.json({ message: 'Node.js connected to MySQL' });
});

app.get('/api/status', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const result = await connection.ping();
    connection.release();
    res.json({ status: 'Connected to MySQL' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
