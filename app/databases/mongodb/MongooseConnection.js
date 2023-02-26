const mongoose = require('mongoose');
const config = lulu.use('app.config');
const wordart = lulu.use('app/misc/wordart');


module.exports = {
    connect: function () {
        mongoose.set('strictQuery', false); // https://mongoosejs.com/docs/deprecations.html#-findandmodify-
        const MONGODB_URL = config.database.mongodb.url || this.buildURL(config.database.mongodb);
        mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose.connection.on('error', (error) => console.log(error));
        mongoose.connection.on('open', () => {
            console.log(wordart.mongodb);
            console.log(`MongoDB connected on ${MONGODB_URL}`)
        });
    },
    buildURL: function (dbParams){
        const { host, port, database, username, password } = dbParams;
        if(username && password){
            return `mongodb://${username}:${password}@${host}:${port}/${database}`;
        }

        return `mongodb://${host}:${port}/${database}`;
    }
}
