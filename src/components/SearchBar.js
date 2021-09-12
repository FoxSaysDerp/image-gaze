import React from "react";

import "../styles/searchbar.scss";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{position: "sticky"}}>
        <h1>Image Search | React App</h1>

        <div className="ui divider"></div>

        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search bar</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
            <button type="submit" className="ui blue button" style={{ marginTop: "16px" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
