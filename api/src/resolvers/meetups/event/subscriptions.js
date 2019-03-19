const eventSubscriptions = {
  event: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.user(null, info);
    }
  }
};

module.exports = {
  eventSubscriptions
};
