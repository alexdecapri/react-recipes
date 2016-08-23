import React from 'react';

function SearchBar (props) {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     term: ''
  //   };
  //   console.log(this.props);
  // }


  // onInputChange(event) {
  //   this.props.term = event.target.value;
  // }
  //
  // onButtonSubmit() {
  //   // console.log(this.state.term);
  //   this.props.term = '';
  // }

    return (
      <div className="search-bar col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div className="input-group">
          <input
            onChange={props.onInputChange}
            className="form-control"
            type="text"
            placeholder="Search for something good..."
            value={props.term}/>
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={props.onSearch}>Search</button>
          </span>
        </div>
      </div>

    )
  }

export default SearchBar;
