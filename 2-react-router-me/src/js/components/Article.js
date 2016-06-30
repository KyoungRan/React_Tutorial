import React from "react";

export default class Article extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h2>{title}</h2>
        <p>React Router is a complete routing library for React.React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
