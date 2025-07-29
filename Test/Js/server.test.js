
describe('Conexión HTTPS', () => {
  test('Debe conectarse correctamente a un servidor HTTPS', async () => {
    const options = {
      hostname: 'www.example.com',
      port: 443,
      path: '/',
      method: 'GET'
    };

    const req = await https.request(options, (res) => {
      expect(res.statusCode).toEqual(200);
    });

    req.end();
  });
});
