import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingChars: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      remainingChars: event.target.maxLength - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" maxLength={this.props.maxChars}/>
        <p>Remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
