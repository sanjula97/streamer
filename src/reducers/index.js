import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authRducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authRducer,
    form: formReducer,
    streams: streamReducer
});