import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";

function LoadingBar({loading}) {
    return loading && <ProgressBar animated now={100} style={{height: 5}}/>
}

export default LoadingBar;