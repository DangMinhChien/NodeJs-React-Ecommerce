'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Bell = require('@hapi/bell');
const HapiSwagger = require('hapi-swagger');
const hapiAuthJWT = require('hapi-auth-jwt2');
const routes = require('./main/routes');
require('dotenv').config();

// create new server instance
const server = new Hapi.Server({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3001,
  routes: {
    cors: {
      origin: ['*'], // an array of origins or 'ignore'
      headers: ['Access-Control-Allow-Headers','Authorization', 'Content-Type'], // an array of strings - 'Access-Control-Allow-Headers'
      credentials: true
    },
    validate: {
      failAction: async (request, h, err) => {
        if (process.env.NODE_ENV === 'production') {
          // In prod, log a limited error message and throw the default Bad Request error.
          throw err;
        } else {
          // During development, log and respond with the full error.
          console.error(err);
          throw err;
        }
      }
    }
  }
});

//Create server socket
const validateUser = (decoded, request) => {
  // This is a simple check that the `sub` claim
  // exists in the access token. Modify it to suit
  // the needs of your application
  if (decoded && decoded.id) {
    return {
      isValid: true
    };
  }

  return {
    isValid: false
  };
};

const apiVersionOptions = {
  basePath: '/api/v1/',
  validVersions: [1, 2],
  defaultVersion: 1,
  vendorName: 'api/v1/'
};

const swaggerOptions = {
  pathPrefixSize: 3,
  host: process.env.MY_HOST || 'localhost',
  basePath: apiVersionOptions.basePath,
  info: {
    title: 'SHOPPING CART API Documention',
    description:
      'This is a SHOPPING CART API Documention.'
  },
  deReference: false,
  securityDefinitions: {
    jwt: {
      type: 'Add Authorization Token here',
      name: 'Authorization',
      in: 'header'
    }
  },
  security: [{ jwt: [] }]
};

async function start() {
  // start your server
  try {
    // start your server
    const plugins = [
      Inert,
      Vision,
      {
        plugin: require('./plugins/logger'),
        options: {
          name: 'shoppingcart-api',
          prettyPrint: process.env.NODE_ENV !== 'production',
          redact: ['req.headers.authorization']
        }
      },
      hapiAuthJWT,
      Bell,
    ];
    plugins.push({
      plugin: HapiSwagger,
      options: swaggerOptions
    });
    await server.register(plugins);
    server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_SECRET || 'secret123',
      validate: validateUser,
      verifyOptions: {
        ignoreExpiration: true
      }
    });

    server.auth.default('jwt');
    server.route(routes);
    await server.start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Server running at: ', server.info.uri);
}

start();
module.exports = server;