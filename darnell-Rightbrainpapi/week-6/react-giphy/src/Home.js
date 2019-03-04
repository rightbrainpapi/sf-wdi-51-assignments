import React, { Component } from 'react';
import './Home.css';
import SearchContainer from './components/SearchContainer';

class Home extends Component {
  render() {
    return (
      <main>
          <section className="bigText">
              <div className="container">
                <h1>Darnell's Giphy Search</h1>
                <p>Home of the React Routed giphy</p>
              </div>
          </section>

          <section className="container">
              <SearchContainer/>
          </section>
      </main>
    );
  }
}

export default Home;