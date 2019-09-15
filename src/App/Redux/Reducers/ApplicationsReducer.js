import {LOAD_APPLICATIONS} from "../ActionTypes";
import {LOAD_APPLICATIONS_SUCCESS} from "../ActionTypes";
import {LOAD_APPLICATIONS_FAILURE} from "../ActionTypes";

const initialState = {
    loading: false,
    error: false,
    errorPayload: null,
    applications: [],
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