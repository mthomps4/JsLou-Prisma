const Query = {
  users(parent, args, { db, prisma }, info) {
    // operations args for query
    const opArgs = {};

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            name_contains: args.query
          },
          {
            email_contains: args.query
          }
        ]
      };
    }

    return prisma.query.users(opArgs, info);
  },
  speakers(parent, args, { db, prisma }, info) {
    return prisma.query.speakers(null, info);
  },
  events(parent, args, { db, prisma }, info) {
    return prisma.query.speakers(null, info);
  },
  projects(parent, args, { db, prisma }, info) {
    return prisma.query.speakers(null, info);
  }
};

export default Query;
