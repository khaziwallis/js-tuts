

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        console.log('am from constructor Footer');
    }
    componentDidMount() {
        console.log('am from componentDidMount Footer');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount Footer');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount Footer');
    }
    render() {
        console.log('am from render Footer');
        return (
            <Container fluid className="footer">
                Search.com
            </Container>
            
        )
    }
}

export default Footer;