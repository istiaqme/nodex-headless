require('./boot');
const config = lulu.use('app.config');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: config.app.corsOptions
});

require('dotenv').config();
const cors = require('cors');
const chalk = require('chalk');
const wordart = lulu.use('app/misc/wordart');

/* Bootstrap - Server & Request Settings */
app.use(cors(config.app.corsOptions));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
/* Bootstrap - Server & Request Settings */

/* Bootstrap - Application Level Middlewares */
app.use(lulu.use('app/middlewares/HTTPInit'));
app.use(lulu.use('app/middlewares/MaintenanceMode'));
/* Bootstrap - Application Level Middlewares */

/* Bootstrap - Routes */
config.app.socketIO? lulu.use('routes/socketio')(io) : null;
app.use(config.app.webRoute, lulu.use('routes/web'));
app.use(config.app.apiRoute, lulu.use('routes/api'));
/* Bootstrap - Routes */

// Database Connection - MongoDB
config.database.mongodb.use? lulu.use('app/databases/mongodb/MongooseConnection').connect() : null;






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
