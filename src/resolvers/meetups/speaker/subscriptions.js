const speakerSubscriptions = {
  speaker: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.speaker(null, info);
    }
  }
};

module.exports = {
  speakerSubscriptions
};
