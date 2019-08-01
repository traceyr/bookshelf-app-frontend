import React, { Component } from 'react';

class App extends Component {

  state = {
    getBasicBitchInfo: ''
  }

  componentDidMount() {
    this.callBasicInfo()
      .then(res => this.setState({ getBasicBitchInfo: res.express }))
      .catch(err => console.log(err));
  }

  callBasicInfo = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <div>
        <div>I am ready to use the back end api!!!!</div>
        <p>{ this.state.getBasicBitchInfo }</p>
      </div>
    );
  }
}

export default App;
