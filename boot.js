const lulu = {
    use: require('abrequire'),
    config: require('./app.config'),
    join: {
        withBase: withBase
    },
    context: {
        http: {},
        ws: {}
    }
}

function withBase (namespace) {
    return require('path').join(__dirname, namespace);
}



global.lulu = lulu;