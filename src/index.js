import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import './prisma';
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
    db,
    pubsub
  }
});

server.start(() => {
  console.log('The server is up!');
});
