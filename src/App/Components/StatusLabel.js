import React from 'react'
import Badge from 'react-bootstrap/Badge'

const applicationStatus = {
    rejected: 'danger',
    approved: 'success',
    waiting: 'warning'
};

export default function StatusLabel({status}) {
    return (
        <Badge variant={applicationStatus[status]}>
            {status}
        </Badge>
    )
}
