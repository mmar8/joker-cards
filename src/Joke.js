import React from 'react';
import {  Card, CardBody, CardTitle, Button, Fade, CardText } from 'reactstrap';
import './App.css';

export default class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div>
        <Card>
         <CardBody>
           <CardTitle>What time did the man go to the dentist?</CardTitle>
           <Button color="primary" onClick={this.toggle}>Magic</Button>
           <Fade in={this.state.fadeIn} className='my-2'>
              <CardText>Tooth hurt-y</CardText>
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
