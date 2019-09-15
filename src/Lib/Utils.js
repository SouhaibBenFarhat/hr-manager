import moment from 'moment'
import _ from 'lodash';

export const dateToAge = (birthday) => {
    return moment().diff(birthday, 'years');
};

export const optionsBy = (array, attr) => {
    const options = [];
    array.forEach((element) => {
        if (!options.includes(element[attr])) {
            options.push(element[attr])
        }
    });
    return options;
};

export const isEmpty = (obj) => {
    if (typeof obj == 'number') return false;
    else if (typeof obj == 'string') return obj.length === 0;
    else if (Array.isArray(obj)) return obj.length === 0;
    else if (typeof obj == 'object') return obj === null || Object.keys(obj).length === 0;
    else if (typeof obj == 'boolean') return false;
    else return !obj;
};

export const removeKeysWithFalsyValues = (obj) => {
    return _.pickBy(obj, _.identity);
};