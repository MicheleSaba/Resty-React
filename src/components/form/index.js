import React from 'react';
import './style.css';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      method: '',
      url: '',
    };
  }

  handleChange = method => {
    this.setState({
      method: method,
    });
    console.log(this.state.method);
  };

  handleSubmit(event) {
    event.preventDefault();

  }
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            name="url"
            placeholder="www.something.com"
            onChange={method => this.handleChange(method)}
          />
          <input
            type="radio"
            value="get"
            name="method"
            onChange={method => this.handleChange(method)}
          />
          <input
            type="radio"
            name="method"
            value="put"
            onChange={method => this.handleChange(method)}
          />
          <input
            type="radio"
            name="method"
            value="patch"
            onChange={method => this.handleChange(method)}
          />
          <input
            type="radio"
            value="post"
            name="method"
            onChange={method => this.handleChange(method)}
          />
          <input type="radio" name="method" value="delete" />
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}
