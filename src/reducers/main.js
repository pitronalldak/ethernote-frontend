import objectAssign from 'object-assign';

import {
    HANDLE_DATE
} from '../actions/main';

const initialState = {
    date: null
};

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_DATE:
            return objectAssign({}, state, {date: action.payload});
        default:
            return state;
    }
}

export default mainReducer;
