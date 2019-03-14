import { userMutations } from './accounts/user';
import { eventMutations } from './meetups/event';
import { projectMutations } from './meetups/project';
import { speakerMutations } from './meetups/speaker';

const Mutation = {
  ...userMutations,
  ...eventMutations,
  ...projectMutations,
  ...speakerMutations
};

export default Mutation;
