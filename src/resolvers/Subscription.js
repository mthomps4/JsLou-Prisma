const Subscription = {
  event: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.user(null, info);
    }
  },
  speaker: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.speaker(null, info);
    }
  },
  project: {
    subscribe(parent, args, { prisma }, info) {
      // {where: {id: args.id}}
      // {where: node: event: id: args.id}
      return prisma.subscription.project(null, info);
    }
  },
  event: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.event(null, info);
    }
  }
};

export default Subscription;
