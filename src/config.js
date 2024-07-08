// variables
require('dotenv').config();
module.exports = {
    app: {
        port: process.env.PORT,
    }, 
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
<<<<<<< Updated upstream
        password: process.env.MYSQL_PASSWORD || 'Amelia98',
=======
        password: process.env.MYSQL_PASSWORD || 'root',
>>>>>>> Stashed changes
        database: process.env.MYSQL_DB || 'gamestation',
    }
}