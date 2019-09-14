import {
    SET_POSITIONS,
    SET_STATUSES,
    SET_FILTER_BY, SET_ORDER_BY, RESET_ORDER_BY, RESET_FILTER_BY
} from "../ActionTypes";

export const setStatuses = (statuses) => ({
    type: SET_STATUSES,
    statuses
});

export const setPositions = (positions) => ({
    type: SET_POSITIONS,
    positions
});

export const setFilterBy = (filterBy) => ({
    type: SET_FILTER_BY,
    filterBy
});

export const setOrderBy = (orderBy) => ({
    type: SET_ORDER_BY,
    orderBy
});

export const resetOrderBy = () => ({
    type: RESET_ORDER_BY
});

export const resetFilterBy = () => ({
    type: RESET_FILTER_BY
});

