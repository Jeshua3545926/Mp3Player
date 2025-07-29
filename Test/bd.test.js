// Test/bd.test.js
const mysql = require('mysql2/promise');


describe('Conexión MySQL', () => {
  test('Debe conectarse correctamente a la base de datos', async () => {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Jesh',
      database: 'mp3player'
    });

    expect(connection).toBeDefined();
    await connection.end();
  });
});

