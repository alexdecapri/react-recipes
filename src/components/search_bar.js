import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onButtonSubmit() {
    console.log(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <input
            onChange={this.onInputChange.bind(this)}
            className="form-control"
            type="text"
            placeholder="Search for something good..."
            value={this.state.term}/>
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onButtonSubmit.bind(this)}>Search</button>
          </span>
        </div>
      <div>Value of the input: {this.state.term}</div>
      </div>

    )
  }
}

export default SearchBar;
