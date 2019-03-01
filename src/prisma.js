import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
  // secret: ''
});

prisma.query
  .users(null, '{id name}')
  .then(data => console.log(data))
  .catch(e => console.error(e));

// export default prisma;
