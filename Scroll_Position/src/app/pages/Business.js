import React from "react";

class Business extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1>Business Page</h1>
        {String(this.props.auth)}
      </div>
    );
  }
}

export default Business;
