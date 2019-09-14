import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {startCase} from 'lodash'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'

export default function TableHeader({orderBy, orderByFields, filterByFields, selectedOptions}) {

    const navItemClick = (event, key) => {
        const currentOrientation = event.currentTarget.getAttribute('orientation');
        const newOrientation = currentOrientation === 'asc' ? 'desc' : 'asc';
        event.currentTarget.setAttribute('orientation', currentOrientation === 'asc' ? 'desc' : 'asc');
        orderBy({[key]: newOrientation});
    };

    const isSelected = (key) => {
        return Object.keys(selectedOptions).includes(key)
    };

    const getIcon = (key) => {
        if (selectedOptions[key] === 'desc') return faArrowDown;
        if (selectedOptions[key] === 'asc') return faArrowUp;
    };


    return (
        <thead>
        <tr>
            {Object.keys(orderByFields).map((key) => (
                <th key={key}
                    orientation={selectedOptions[key] || 'desc'}
                    className={`text-nowrap ${isSelected(key) ? 'font-weight-bold' : 'font-weight-normal'}`}
                    onClick={(event) => navItemClick(event, key)}>
                    <Nav.Item>
                        <Nav.Link>
                            {startCase(key)}
                            {isSelected(key) && <FontAwesomeIcon style={{marginLeft: 10}} icon={getIcon(key)}/>}
                        </Nav.Link>
                    </Nav.Item>
                </th>
            ))}

            {Object.keys(filterByFields).map((key) => (
                <th key={key} className='text-nowrap font-weight-normal'>
                    <Nav.Item>
                        <Nav.Link>{startCase(key)}</Nav.Link>
                    </Nav.Item>
                </th>
            ))}
        </tr>
        </thead>
    )
}