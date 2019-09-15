import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {startCase} from 'lodash'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons/index'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons/index'

export default function TableHeader({setFilteringParams, filteringFields, selectedOptions}) {

    const navItemClick = (event, key) => {
        const currentOrientation = event.currentTarget.getAttribute('orientation');
        const newOrientation = currentOrientation === 'asc' ? 'desc' : 'asc';
        event.currentTarget.setAttribute('orientation', currentOrientation === 'asc' ? 'desc' : 'asc');
        setFilteringParams({[key]: newOrientation});
    };

    const isSelected = (key) => {
        return Object.keys(selectedOptions).includes(key) && ['asc', 'desc'].includes(selectedOptions[key])
    };

    const getIcon = (key) => {
        if (selectedOptions[key] === 'desc') return faArrowDown;
        if (selectedOptions[key] === 'asc') return faArrowUp;
    };

    return (
        <thead>
        <tr>
            {Object.keys(filteringFields).map((key) => (
                <th key={key}
                    orientation={selectedOptions[key] || 'desc'}
                    className={`text-nowrap ${isSelected(key) ? 'font-weight-bold' : 'font-weight-normal'}`}
                    onClick={(event) => navItemClick(event, key)}>
                    <Nav.Item>
                        <Nav.Link>
                            {startCase(filteringFields[key])}
                            {isSelected(key) && <FontAwesomeIcon style={{marginLeft: 10}} icon={getIcon(key)}/>}
                        </Nav.Link>
                    </Nav.Item>
                </th>
            ))}
        </tr>
        </thead>
    )
}