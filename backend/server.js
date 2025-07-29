const express = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('./conection.js');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('¡El servidor de la API está funcionando correctamente!');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son requeridos.' });
  }

  let connection;

  try {
    // Crear una conexión
    connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      'SELECT * FROM login WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length > 0) {
      console.log(`Login exitoso para el usuario: ${username}`);
      res.status(200).json({ message: 'Login exitoso', user: rows[0] });
    } else {
      console.log(`Intento de login fallido para: ${username}`);
      res.status(401).json({ message: 'Credenciales incorrectas.' });
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  } finally {
    if (connection) {
      await connection.end(); // Cierra la conexión correctamente
    }
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
