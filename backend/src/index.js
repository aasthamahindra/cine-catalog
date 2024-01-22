const express = require('express');
const { ApolloServer } = require('apollo-server');
const { createServer } = require('http');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs } = require('./schema/typedefs');
const { resolvers } = require('./resolvers/resolvers');
const cors = require('cors');
const app = express();

// async function startServer() {
//     const server = new ApolloServer({ typeDefs, resolvers });
  
//     await server.start();
  
//     app.use('/', cors(), express.json(), expressMiddleware(server));
  
//     await new Promise((resolve) =>
//       app.listen({ port: 5000, host: '0.0.0.0' }, resolve)
//     ).then((d) => {
//       console.log('Server started on port 5000');
//     }).catch((e) => {
//       console.log(`Error: ${e}`);
//     });
  
//     app.get('/health', (req, res) => {
//       res.status(200).send('Health check successful!');
//     });
//   }
  
//   startServer();

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  context: ({ req }) => {
    if (req.headers && req.headers.authorization) {
      const auth = req.headers.authorization;
      const parts = auth.split(' ');
      const bearer = parts[0];
      const token = parts[1];

      if (bearer === "Bearer") {
        const user = get
      }
    }
  }
});

server.applyMiddleware({ app });

const httpServer = createServer(app);

httpServer.listen({ port: 5000, host: '0.0.0.0' }, () => {
  try {
    console.log('Server started at port 5000');
  } catch (error) {
    console.log(`Error starting server: ${error}`);
  }
})
  