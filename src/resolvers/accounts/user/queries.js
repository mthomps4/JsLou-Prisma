const userQueries = {
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
  }
};

module.exports = {
  userQueries
};
