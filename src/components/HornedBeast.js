import React from "react";
import Card from "react-bootstrap/Card";


class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    status: "Vote for me!❤️"
      clicks: 0,
    }
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1, status: "Thanks for voting for me ❤️!"});

  };

  render() {
    return (
      <Card className="h-100 p-2" onClick={this.handleClick}>
        <Card.Title> {this.props.name}</Card.Title>
        <Card.Img fluid src={this.props.url} />
        <Card.Body>Clicks: {this.state.clicks}</Card.Body>
      </Card>
    );
  }

}

export default HornedBeast;