const projectSubscriptions = {
  project: {
    subscribe(parent, args, { prisma }, info) {
      // {where: {id: args.id}}
      // {where: node: event: id: args.id}
      return prisma.subscription.project(null, info);
    }
  }
};

module.exports = {
  projectSubscriptions
};
