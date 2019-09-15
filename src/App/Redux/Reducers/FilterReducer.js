import {
    SET_STATUSES,
    SET_POSITIONS,
    SET_FILTERING_PARAMS,
    RESET_FILTERING_PARAMS
} from "../ActionTypes";

const initialState = {
    statuses: [],
    positions: [],
    filteringParams: {},
    searchQuery: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_STATUSES: {
            return {
                ...state,
                statuses: [...action.statuses]
            }
        }
        case SET_POSITIONS: {
            return {
                ...state,
                positions: [...action.positions]
            };
        }
        case SET_FILTERING_PARAMS: {
            return {
                ...state,
                filteringParams: Object.assign({}, state.filteringParams, action.filteringParams)
            }
        }
        case RESET_FILTERING_PARAMS: {
            return {
                ...state,
                filteringParams: {},
                searchQuery: ''
            }
        }
        default:
            return state;
    }
}