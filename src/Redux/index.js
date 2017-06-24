import { combineReducers } from 'redux';
import someDucks from './SomeDucks';

const rootReducer = combineReducers({
    someDucks,
});

export default rootReducer;
