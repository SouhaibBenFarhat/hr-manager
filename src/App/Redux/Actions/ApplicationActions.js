import {
    LOAD_APPLICATIONS,
    LOAD_APPLICATIONS_FAILURE,
    LOAD_APPLICATIONS_SUCCESS
} from "../ActionTypes";
import Api from "../../../Lib/Api";
import * as candidates from '../candidates'
import {setPositions, setStatuses} from "./FilterActions";
import {optionsBy} from "../../../Lib/Utils";

export const fetchApplications = () => {
    return dispatch => {
        dispatch(loadApplicationsSuccess(candidates.data));
        dispatch(setStatuses(optionsBy(candidates.data, 'status')));
        dispatch(setPositions(optionsBy(candidates.data, 'position_applied')));
    }
};

export const loadApplications = () => ({
    type: LOAD_APPLICATIONS
});

export const loadApplicationsSuccess = (applications) => ({
    type: LOAD_APPLICATIONS_SUCCESS,
    applications
});

export const loadApplicationsFailure = (errorPayload) => ({
    type: LOAD_APPLICATIONS_FAILURE,
    errorPayload
});



// dispatch(loadApplications());
// Api.get('/candidates').then((response) => {
//     dispatch(loadApplicationsSuccess(response.data['data']))
// }).catch((error) => {
//     dispatch(loadApplicationsFailure(error))
// })