var config = {
    dev: {
        internet: false,
        mode: 'dev',
        mongoUrl: null,
        port: 5000
    },
    prod: {
        internet: true,
        mode: 'prod',
        mongoUrl: process.env.MONGOHQ_URL,
        port: process.env.PORT
    }
};

module.exports = function (mode) {
    return config[mode || process.argv[2] || 'dev'] || config.dev;
};