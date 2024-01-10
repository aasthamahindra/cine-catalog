const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs } = require('./schema/typedefs');
const { resolvers } = require('./resolvers/resolvers');
const cors = require('cors');
const app = express();

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
  
    await server.start();
  
    app.use('/', cors(), express.json(), expressMiddleware(server));
  
    await new Promise((resolve) =>
      app.listen({ port: 5000, host: '0.0.0.0' }, resolve)
    ).then((d) => {
      console.log('Server started on port 5000');
    }).catch((e) => {
      console.log(`Error: ${e}`);
    });
  
    app.get('/health', (req, res) => {
      res.status(200).send('Health check successful!');
    });
  }
  
  startServer();
  