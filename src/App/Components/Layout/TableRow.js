import React from 'react'
import {dateToAge} from "../../../Lib/Utils";
import StatusLabel from "../StatusLabel";
import Button from 'react-bootstrap/Button'

function TableRow({row}) {
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
                {row.position_applied}
            </td>
            <td className='text-nowrap'>
                <StatusLabel status={row.status}/>
            </td>
        </tr>
    )
}

export default TableRow