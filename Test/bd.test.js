import test from "test";

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Jesh',
  database: 'mp3player'
};

export { dbConfig };

test('prueba de conexión a la base de datos', async () => {
  const connection = await mysql.createConnection(dbConfig);
  await connection.connect();
  await connection.end();
});
