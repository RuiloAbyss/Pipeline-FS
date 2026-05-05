const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: "/api/products",
    method: 'GET',
};

const req = http.request(options, (res) => {
    if (res.statusCode === 403 || res.statusCode === 401) {
        console.log("Test OK (La API protegió la rut correctamente)");
        process.exit(0);
    } else {
        console.log("Test Failed (La API no protegió la ruta correctamente)");
        process.exit(1);
    }
}); // cambio intencionado Hola mundo!

req.on('error', () => {
    console.error("Error de conexión a la API");
    process.exit(1);
});

req.end();