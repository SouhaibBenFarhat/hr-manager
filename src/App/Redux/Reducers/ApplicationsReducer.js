import {LOAD_APPLICATIONS} from "../ActionTypes";
import {LOAD_APPLICATIONS_SUCCESS} from "../ActionTypes";
import {LOAD_APPLICATIONS_FAILURE} from "../ActionTypes";
import {optionsBy} from "../../../Lib/Utils";

const initialState = {
    loading: false,
    error: null,
    errorPayload: null,
    applications: [],
    positions: [],
    statuses: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_APPLICATIONS: {
            return {
                ...state,
                loading: true,
                error: false,
                errorPayload: null
            }
        }
        case LOAD_APPLICATIONS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                errorPayload: null,
                applications: [...action.applications],
                positions: optionsBy(action.applications, 'position_applied'),
                statuses: optionsBy(action.applications, 'status')
            };
        }
        case LOAD_APPLICATIONS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
                errorPayload: action.errorPayload,
                applications: []
            }
        }
        default:
            return state;
    }
}