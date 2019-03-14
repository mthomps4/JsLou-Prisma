const speakerQueries = {
  speakers(parent, args, { db, prisma }, info) {
    return prisma.query.speakers(null, info);
  }
};

module.exports = {
  speakerQueries
};
