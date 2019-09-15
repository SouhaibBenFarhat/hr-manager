import {
    SET_POSITIONS,
    SET_STATUSES,
    SET_FILTERING_PARAMS,
    RESET_FILTERING_PARAMS
} from "../ActionTypes";

export const setStatuses = (statuses) => ({
    type: SET_STATUSES,
    statuses
});

export const setPositions = (positions) => ({
    type: SET_POSITIONS,
    positions
});

export const setFilteringParams = (filteringParams) => ({
    type: SET_FILTERING_PARAMS,
    filteringParams
});

export const resetFilteringParams = () => ({
    type: RESET_FILTERING_PARAMS
});

