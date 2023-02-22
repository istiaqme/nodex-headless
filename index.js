const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');
const chalk = require('chalk');
const config = require('./app.config');
const wordart = require('./app/misc/wordart');

server.use(cors(config.app.corsOptions));

server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({extended: true, limit: '50mb'}));

server.use(require('./app/middlewares/MaintenanceMode'));

server.use(config.app.webRoute, require('./routes/web'));
server.use(config.app.apiRoute, require('./routes/api'));

// Database Connection - MongoDB
config.database.mongodb.use? require('./app/database/mongodb/MongooseConnection').connect() : null;






server.listen(config.server.port, () => {
    console.log(wordart.server);
    console.log(`Server is running on port :: ${config.server.port}`);
    console.log(`App Name :: ${config.app.name}`);
    console.log(`App Version :: ${config.app.version}`);
    config.app.debug? console.log(chalk.blue.bgRed.bold(`SHOWING ERRORS TO USER - APP IN DEBUG MODE`)) : null;
    config.app.env === 'development'? console.log(chalk.blue.bgRed.bold(`DEVELOPMENT ENVIRONMENT`)) : null;

    if(config.app.env === 'production'){
        console.log(chalk.blue.bgRed.bold(`PRODUCTION ENVIRONMENT`));
        console.log(chalk.blue.bgRed.bold(`ERRORS WILL NOT BE SHOWN TO USER`));
    }
    else{
        console.log(chalk.blue.bgBlue.bold(`
        All configuration details are available in app.config.js.
        All database connection details are available in app/database.
        All routes are available in routes folder.
        All controllers are available in app/controllers.
        All models are available in app/models.
        All middlewares are available in app/middlewares.
        All responses are available in app/responses.
        All errors are available in app/errors.
        All helpers are available in app/helpers.
        `))
    }
});
