

import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        console.log('am from constructor UserCard');
    }
    componentDidMount() {
        console.log('am from componentDidMount UserCard');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount UserCard');
    }
    componentDidUpdate() {
        console.log('am from componentDidMount UserCard');
    }
    render() {
        console.log('am from render UserCard');
        if (this?.props?.user?.message === 'Not Found') {
            return (
                <Container>
                    No user found for given search term!
                </Container>
            )
        }
        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props?.user?.avatar_url} />
                    <Card.Body>
                        <Card.Title>{this.props?.user?.login}</Card.Title>
                        <Card.Text>
                            <div> 
                                URL:{ ' '}
                                <a href={this.props?.user?.html_url} target="_blank">
                                    {this.props?.user?.html_url}
                                </a>
                            </div>
                            <div> followers: { this.props?.user?.followers || 0}</div>
                            <div> following: { this.props?.user?.following || 0 }</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default UserCard;