import { userSubscriptions } from './accounts/user';
import { eventSubscriptions } from './meetups/event';
import { projectSubscriptions } from './meetups/project';
import { speakerSubscriptions } from './meetups/speaker';

const Subscription = {
  ...userSubscriptions,
  ...eventSubscriptions,
  ...projectSubscriptions,
  ...speakerSubscriptions
};

export default Subscription;
