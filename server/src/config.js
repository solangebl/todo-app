var env = require('node-env-file');

env('.env');

var config = {};

config.web = {};
config.mongo = {};
config.paths = {};
config.jwks = {};
config.autho = {};

config.mongo.db = process.env.MONGO_URL;

config.web.port = process.env.PORT;
config.web.base_url = process.env.APP_BASE_URL;

config.jwks.uri = process.env.JWKS_URI;
config.autho.audience = process.env.AUTHO_AUDIENCE;
config.autho.domain = process.env.AUTHO_DOMAIN;

module.exports = config;
