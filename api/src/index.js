import { GraphQLServer, PubSub } from 'graphql-yoga';
import prisma from './prisma';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import Subscription from './resolvers/Subscription';
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: 'api/src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  context: {
    pubsub,
    prisma
  }
});

server
  .start({
    cors: { credentials: true, origin: [process.env.FRONTEND_URL, process.env.BACKEND_URL, process.env.PLAYGROUND_URL] }
  })
  .then(() =>
    console.log(
      `Server(s) started on
      -- app: ${process.env.FRONTEND_URL}
      -- prisma: ${process.env.BACKEND_URL}
      -- playground: ${process.env.PLAYGROUND_URL}/playground`
    )
  )
  .catch(e => console.error(e));
