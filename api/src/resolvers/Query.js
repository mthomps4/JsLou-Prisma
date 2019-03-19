import { userQueries } from './accounts/user';
import { eventQueries } from './meetups/event';
import { projectQueries } from './meetups/project';
import { speakerQueries } from './meetups/speaker';

const Query = {
  ...userQueries,
  ...eventQueries,
  ...projectQueries,
  ...speakerQueries
};

export default Query;
