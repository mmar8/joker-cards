import React from 'react';
import { Jumbotron, Card, CardBody, CardTitle, Button, Fade, CardText } from 'reactstrap';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Card>
         <CardBody>
           <CardTitle>Card title</CardTitle>
           <Button color="primary" onClick={this.toggle}>Magic</Button>
           <Fade in={this.state.fadeIn} className='my-2'>
              <CardText>Fading text</CardText>
            </Fade>
         </CardBody>
        </Card>
      </div>
    );
  }
  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }
};
