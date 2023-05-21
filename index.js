const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//  Creamos el servidor 

const app = express();

// Conectamos a la BBDD
conectarDB;
app.use(cors());


app.use(express.json()); // admita json (desde postman en este caso)

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor está corriendo perfectamente');
})