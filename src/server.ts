import express from "express";
import compression from "compression";
import cors from "cors";
//import { graphqlHTTP } from "express-graphql" desinstalar porque no se ocupara npm uninstall express-graphql
import { ApolloServer } from "apollo-server-express"
import schema from "./schema"
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';


const app = express();

app.use(cors());

app.use(compression())
const PORT = 5300;
async function startApolloServer(schema: any) {
    
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        schema: schema,
        introspection: true,
        csrfPrevention: true,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>(resolve => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  }

  startApolloServer( schema );


/*app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);*/ //Forma para express-graphql

/*app.use('/',(request,response) =>{
    response.send('Bienvenido al curso GraphQL');
})*/

/*const PORT = 5300;

app.listen(
    { port: PORT},
    () => console.log(`Hola Mundo API GRAPHQL http://localhost:${PORT}/graphql`)
);*/
