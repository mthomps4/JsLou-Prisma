const Subscription = {
  project: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator('project');
    }
  },
  event: {
    subscribe(parent, args, { pubsub }, info) {
      return pubsub.asyncIterator('event');
    }
  }
};

export default Subscription;
