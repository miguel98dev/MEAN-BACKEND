const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async () => {

    try {

        await mongoose.set('strictQuery', false);
        mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('BBDD conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB();