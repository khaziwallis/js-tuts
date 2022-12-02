

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Title.css';

class Title extends React.Component {
    constructor(props) {
        super(props);
        console.log('am from constructor Title');
    }
    componentDidMount() {
        console.log('am from componentDidMount Title');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount Title');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount Title');
    }
    logout() {
        alert('trying to logout...');
    }
    render() {
        console.log('am from render Title');
        return (
            <Container fluid className="titleContainer">
                <Row>
                    <Col xs={10}>
                        <div className="title">
                            Search.com
                        </div>
                    </Col>
                    {   this.props?.user?.login && (
                        <Col xs={2}>
                            User Name: {this.props?.user?.login}
                            Last Login: {this.props?.user?.updated_at?.split('T')[0]}
                            <div>
                                <button
                                    className="logoutBtn"
                                    onClick={() => this.logout()}>
                                    Logout
                                </button>
                            </div>
                        </Col>
                    )
                    }
                </Row>
            </Container>
            
        )
    }
}

export default Title;