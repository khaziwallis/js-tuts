import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form';
import API from '../service/user';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            isLoading: false,
            userName: '',
            password: ''
        };
    }
    async submitHandler() {
        event.preventDefault();
        const result = await API.getGithubUser(this.state?.userName);
        if (result?.login) {
            /*
                dispatch({
                    type: "LOGIN",
                    payload: { user: result, isLoggedIn: true }
                });
            */
            this.setState({
                isLoading: false,
                errorMessage: ""
            });
        } else {
            this.setState({
                isLoading: false,
                errorMessage: "Sorry! Login failed"
            });
        }
    }
    render() {
        return (
            <>
                <Title user={{}}/>
                <div className="loginContainer">
                    <div>
                        {this.state.isLoading ? (
                        <div>
                            <div>Loading....</div>
                        </div>
                        ) : (
                        <Container>
                            <Form onSubmit={() => this.submitHandler()}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => this.setState({ userName: e.target.value })} />
                                    <Form.Text className="text-muted">
                                        Enter valid github username
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" onChange={(e) => this.setState({ password: e.target.value })} />
                                    <Form.Text className="text-muted">
                                        password same as username
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Button variant="success" type="submit">Submit</Button>
                                </Form.Group>
                                <span style={{ color: 'red', textAlign: 'center' }}>{this.state.errorMessage}</span>
                            </Form>
                        </Container>
                        )}
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Login;