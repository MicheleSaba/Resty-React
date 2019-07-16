
import React from 'react';


export const LoginContext = React.createContext();

class ApiProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      history: []
    };
  }

  // method = () => {
  //   this.setState(method: 'this.state.value');
  // };

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default ApiProvider;