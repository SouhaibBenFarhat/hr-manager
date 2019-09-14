import {
    SET_ORDER_BY,
    SET_POSITIONS,
    SET_STATUSES,
    SET_FILTER_BY, RESET_FILTER_BY, RESET_ORDER_BY
} from "../ActionTypes";

const initialState = {
    statuses: [],
    positions: [],
    filterBy: [],
    orderBy: {}
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
        case SET_FILTER_BY: {
            return {
                ...state,
                filterBy: [...state.filterBy, action.filterBy]
            }
        }
        case SET_ORDER_BY: {
            return {
                ...state,
                orderBy: Object.assign({}, state.orderBy, action.orderBy)
            }
        }
        case RESET_FILTER_BY: {
            return {
                ...state,
                filterBy: []
            }
        }
        case RESET_ORDER_BY: {
            return {
                ...state,
                orderBy: {}
            }
        }
        default:
            return state;
    }
}