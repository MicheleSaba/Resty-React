
import React from 'react';


export const ApiContext = React.createContext();

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
      <ApiContext.Provider value={this.state}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}

export default ApiProvider;