import React from 'react'
import {dateToAge} from "../../../Lib/Utils";
import Button from 'react-bootstrap/Button'
import {applicationStatus} from "../../../Lib/Keys";

function TableRow({row, setFilteringParams}) {
    return (
        <tr>
            <td className='text-nowrap'>
                {row.name}
            </td>
            <td className='text-nowrap'>
                <Button variant="outline-primary">
                    {row.email}
                </Button>
            </td>
            <td className='text-nowrap'>
                {dateToAge(row.birth_date)}
            </td>
            <td className='text-nowrap'>
                {row.year_of_experience}
            </td>
            <td className='text-nowrap'>
                {row.application_date}
            </td>
            <td className='text-nowrap'>
                <Button variant="outline-secondary"
                        onClick={() => setFilteringParams({position_applied: row.position_applied})}>
                    {row.position_applied}
                </Button>
            </td>
            <td className='text-nowrap'>
                <Button variant={applicationStatus[row.status]}
                        onClick={() => setFilteringParams({status: row.status})}>
                    {row.status}
                </Button>
            </td>
        </tr>
    )
}

export default TableRow