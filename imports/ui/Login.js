import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export default class Login extends React.Component {
    state = {
        email: '',
        errorMessage: false,
        loading: false,
        password: ''
    }
    render() {
        return (
            <Container className="Absolute-Center">
                <Row className="justify-content-md-center">
                    <Col md={{span:6}}>
                        <h2>Login</h2>
                        <Form >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    value={this.state.email}
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                    type="email" 
                                    placeholder="Enter email" 
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    value={this.state.password}
                                    onChange={(event) => this.setState({ password: event.target.value })}
                                    type="password" 
                                    placeholder="Password" 
                                />
                            </Form.Group>
                            <Container>
                                <Row>
                                    <Col sm={{span:2, offset:5}} md={{offset:10, span:2}}>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                                
                        </Form>
                    </Col>
                </Row>
            </Container>
            );
    }
}