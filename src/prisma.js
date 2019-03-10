import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: process.env.REACT_APP_PRISMA_SECRET,
  debug: true,
  playground: true,
  introspection: true
});

export default prisma;
