import moment from 'moment'
import _ from 'lodash';
import _orderBy from "lodash/orderBy";

// Use momentJS to convert birthday to age
export const dateToAge = (birthday) => {
    return moment().diff(birthday, 'years');
};

// looping through a json Array and return a set of options (distinct) by attribute.
export const optionsBy = (array, attr) => {
    const options = [];
    array.forEach((element) => {
        if (!options.includes(element[attr])) {
            options.push(element[attr])
        }
    });
    return options;
};

// Check if object is empty?
export const isEmpty = (obj) => {
    if (typeof obj == 'number') return false;
    else if (typeof obj == 'string') return obj.length === 0;
    else if (Array.isArray(obj)) return obj.length === 0;
    else if (typeof obj == 'object') return obj === null || Object.keys(obj).length === 0;
    else if (typeof obj == 'boolean') return false;
    else return !obj;
};

// removing  keys with falsy values from object, Falsy values are [0, '', false, null, undefined, Nan]
export const removeKeysWithFalsyValues = (obj) => {
    return _.pickBy(obj, _.identity);
};