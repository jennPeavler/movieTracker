import React, { Component } from 'react';
import MovieList from './MovieList'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <MovieList />
        {this.props.children}
      </div>
    )
  }
}
