import {combineReducers} from 'redux';

import home from './home';
import searchJobs from './search_jobs_reducer.js';
import postJob from './post_job_reducer.js';
import registerStudent from './register_students.js';

export default combineReducers({
    home,
    searchJobs,
    postJob,
    registerStudent
});
