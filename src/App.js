import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './App.css';
import Joke from './Joke';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Joke Cards</h1>
          <p className="lead">This is a simple app to make the world a better place.</p>
          <hr className="my-2" />
          <p>Here are a few jokes to choose from. Don't forget to press the button to reveal a punchline!</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col className="p-3" sm="4">
              <Joke />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
};
