import {
    SET_STATUSES,
    SET_POSITIONS,
    SET_FILTERING_PARAMS,
    RESET_FILTERING_PARAMS
} from "../ActionTypes";
import {removeKeysWithFalsyValues} from "../../../Lib/Utils";

const initialState = {
    statuses: [],
    positions: [],
    filteringParams: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_STATUSES: {
            return {
                ...state,
                statuses: [...action.statuses].sort()
            }
        }
        case SET_POSITIONS: {
            return {
                ...state,
                positions: [...action.positions].sort()
            };
        }
        case SET_FILTERING_PARAMS: {
            return {
                ...state,
                filteringParams: removeKeysWithFalsyValues(Object.assign({}, state.filteringParams, action.filteringParams))
            }
        }
        case RESET_FILTERING_PARAMS: {
            return {
                ...state,
                filteringParams: {}
            }
        }
        default:
            return state;
    }
}