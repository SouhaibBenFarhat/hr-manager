import React from 'react';
import Navigation from './Components/Layout/Navigation'
import ApplicationsList from './Components/ApplicationsList'
import Container from 'react-bootstrap/Container'

function App() {
    return (
        <div>
            <Navigation/>
            <Container className='mt-5'>
                <ApplicationsList/>
            </Container>
        </div>
    );
}

export default App;
