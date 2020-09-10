import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './App.css';
import Joke from './Joke';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: [
        {
          setup: "What time did the man go to the dentist?",
          punchline: "Tooth hurt-y"
        },
        {
          setup: "Did you hear about the guy who invented Lifesavers?",
          punchline: "They say he made a mint"
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!"
        },
        {
          setup: "Why did the Clydesdale give the pony a glass of water?",
          punchline: "Because he was a little horse!"
        }
      ]
    }
  }

  render() {
    let jokeCards = this.state.jokes.map(humor => {
        return (
          <Col className="p-3" sm="5">
              <Joke humor={humor} />
          </Col>
        )
      })
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
              {jokeCards}
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
