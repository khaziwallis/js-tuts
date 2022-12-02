

import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './SearchUser.css';

class SearchUser extends React.Component {
    constructor(props) {
        super(props);
        console.log('am from constructor SearchUser');
    }
    componentDidMount() {
        console.log('am from componentDidMount SearchUser');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount SearchUser');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount SearchUser');
    }
    handleChange(event) {
        event.preventDefault();
        this.props.onUpdate(event?.target?.value);
    }
    onSubmit() {
        event.preventDefault();
        this.props.onSubmit();
    }
    render() {
        console.log('am from render UserCard');
        return (
            <Container className="formContainer">
                <form onSubmit={() => this.onSubmit()}>
                <Row>
                    <Col xs={6}>
                        <input className="searchInput" name="searchUser" onChange={(event) => this.handleChange(event)}/>
                    </Col>
                    <Col xs={6}>
                        <Button className="submitBtn" type="submit" variant="success">
                            Search
                        </Button>
                    </Col>
                </Row>
                </form>
            
            </Container>
        )
    }
}

export default SearchUser;