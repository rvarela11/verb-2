import React, { Component } from 'react';

class Search extends Component {

  state = {
    results: []
  }

  searchUpdated = (event) => {
    const resultsArray = this.results(event.target.value);
    this.setState({results: resultsArray});
    document.body.addEventListener("click", this.bodyHideSearchResults);
  }

  results = (wordToMatch) => {
    const wordToMatchLowerCase = wordToMatch.toLowerCase();
    return this.props.data.filter(({ first_name, last_name } ) => {
      return first_name.toLowerCase().includes(wordToMatchLowerCase) || last_name.toLowerCase().includes(wordToMatchLowerCase)
    });
  }

  singleUserInfo = (user) => {
    this.props.singleUser(user);
    this.setState({results: []});
  }

  bodyHideSearchResults = (e) => {

    // Clean input search
    const search_input = document.querySelector(".search-form__input");
    search_input.value = "";

    // Hide search results when user clicks outside
    const search_li_body = event.target.parentElement.classList[0];
    const search_li_class = document.querySelectorAll(".search_ul_li");

    search_li_class.forEach(li_class => {
      if (search_li_body === li_class.classList[0]) {
        document.body.removeEventListener("click", this.bodyHideSearchResults);
      }
      if (search_li_body !== li_class.classList[0]) {
        this.setState({results: []});
      }
    })
  }

  render() {
    return <div>
      <form className="search-form">
          <input type="text" className="search-form__input" placeholder="Name" onChange={this.searchUpdated}/>
          <ul className="display__ul search-form-results__ul">
            {this.state.results.map((user, index)=> {
              return <div key={index}>
                <li className="search_ul_li" onClick={this.singleUserInfo.bind(this, user, index)}>
                  <span style={{background: (user.group === "IT") ? '#3333FF' : (user.group === "Sales") ? '#ffc600' : (user.group === "Support") ? 'green' : 'black'}}></span>
                  <span>{`${user.first_name} ${user.last_name}`}</span>
                  <span>{`${user.region}`}</span>
                </li>
              </div>
            })}
          </ul>
      </form>
    </div>
  }
}

export default Search;
