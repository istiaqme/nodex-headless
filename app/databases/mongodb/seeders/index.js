const lrequire = require('abrequire');
lrequire('boot');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const fsp = fs.promises;
const chalk = require('chalk');
const { Model } = require('mongoose');
const config = lulu.use('app.config');

async function seed(){
    
    console.log(chalk.yellow("********************"));
    console.log(chalk.white("Lulu is starting to seed Mongo Database."));
    console.log(chalk.magenta("⚠ Caution: Current Documents Will Be Deleted. ⚠"));
    console.log(chalk.yellow("********************"));

    const { database: { mongodb }, namespaces } = lulu.config;

    console.log(chalk.yellow(`Trying to connect to MongoDB Via Mongoose...`));

    mongoose.set('strictQuery', false); // https://mongoosejs.com/docs/deprecations.html#-findandmodify-
    const MONGODB_URL = mongodb.url || buildURL(mongodb);
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('error', (error) => console.log(error));
    mongoose.connection.on('open', () => {
        console.log(chalk.bgGreenBright(`✓✓✓ MongoDB connected on ${MONGODB_URL}`))
    });


    

    const DATASETS_DIR = lulu.join.withBase(`${namespaces.mongoose}/${mongodb.seederDir}/${mongodb.seederDatasetsDir}`);
    const files = await fileNames(DATASETS_DIR);
    for(let i = 0; i < files.length; i++){
        const file = files[i];
        const splittedFile = file.split('.');
        const ModelFile = lulu.join.withBase(`${namespaces.models}/mongoose/${splittedFile[0]}.js`);
        if (fs.existsSync(ModelFile)) {
            const ThisModel = lulu.use(`${namespaces.models}/mongoose/${splittedFile[0]}.js`);
            
            const fileData = lulu.use(`${namespaces.mongoose}/${mongodb.seederDir}/${mongodb.seederDatasetsDir}/${file}`);
            const dataset = fileData[splittedFile[0]];
            
            if(Array.isArray(dataset)){
                
                const startTime = new Date().getTime();
                await ThisModel.deleteMany();
                await ThisModel.insertMany(dataset);
                
                const endTime = new Date().getTime();

                console.log(chalk.green(`✓ Model ${splittedFile[0]} - Seeding Successful - ${endTime - startTime} ms.`));
            }
            else{
                console.log(chalk.red(`☠ Model ${splittedFile[0]} - Seeding Failed - Dataset Format Error.`));
            }
            
        }
        else{
            console.log(chalk.red(`☠ Model ${splittedFile[0]} - Seeding Failed - Model Doesn't Exist.`));
        }

        
    }

    console.log(chalk.yellow("********************"));
    console.log(chalk.white("Lulu has completed seeding Mongo Database."));
    console.log(chalk.yellow("********************"));

    return;
}

async function fileNames(dirname) {
    const data = [];
    const files = await fsp.readdir(dirname);
    return files;
}

async function files(dirname) {
    const data = [];
    const files = await fsp.readdir(dirname);
    await Promise.all(files.map(async filename => {
        const full = path.join(dirname, filename);
        const content = await fsp.readFile(full, {encoding: 'utf8'});
        data.push({
            filename,
            content,
            fullPath: full
        })
    }));
    return data;
}


function buildURL (dbParams){
    const { host, port, database, username, password } = dbParams;
    if(username && password){
        return `mongodb://${username}:${password}@${host}:${port}/${database}`;
    }

    return `mongodb://${host}:${port}/${database}`;
}

(async () => {
    await seed();
})();


module.exports = {seed};