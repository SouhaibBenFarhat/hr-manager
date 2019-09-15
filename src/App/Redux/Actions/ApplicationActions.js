import {
    LOAD_APPLICATIONS,
    LOAD_APPLICATIONS_FAILURE,
    LOAD_APPLICATIONS_SUCCESS
} from "../ActionTypes";
import Api from "../../../Lib/Api";
import {setPositions, setStatuses} from "./FilterActions";
import {optionsBy} from "../../../Lib/Utils";

export const fetchApplications = () => {
    return dispatch => {
        dispatch(loadApplications());
        Api.get('/candidates').then((response) => {
            dispatch(loadApplicationsSuccess(response.data));
            dispatch(setStatuses(optionsBy(response.data, 'status')));
            dispatch(setPositions(optionsBy(response.data, 'position_applied')));
        }).catch((error) => {
            dispatch(loadApplicationsFailure(error))
        })
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