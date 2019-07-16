
import React from 'react';
import superagent from 'superagent';


export const ApiContext = React.createContext();

class ApiProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      response: null,
      history: [],

      handleRequest: this.makeRequest
    };
  }

 makeRequest = request => {
    console.log('request', request);

    superagent(request.method, request.url)
      .catch(err => {
        // Add 500 response to history, too
        return err.response;
      })
      .then(res => {
        console.log('response', res);
        // TODO: let context know we have a response

        this.setState(state => ({
          ...request,
          response: res,
          history: [
            {
              ...request,
              responseStatus: res.status
            },
            ...state.history
          ]
        }));
      })
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