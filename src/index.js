import { GraphQLServer, PubSub } from 'graphql-yoga';
import prisma from './prisma';
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';
import Subscription from './resolvers/Subscription';
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
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

server.start(() => {
  console.log('The server is up!');
});
