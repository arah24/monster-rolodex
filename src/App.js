import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ""
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({
      users: users
    });
  }

  handleChange = e =>
    this.setState({
      searchField: e.target.value
    });

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search users"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
