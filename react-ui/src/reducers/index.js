import {combineReducers} from 'redux';

import home from './home';
import searchJobs from './search_jobs_reducer.js';
import postJob from './post_job_reducer.js';
import searchStudents from './search_students_reducer.js';

export default combineReducers({
    home,
    searchJobs,
    postJob,
    searchStudents
});