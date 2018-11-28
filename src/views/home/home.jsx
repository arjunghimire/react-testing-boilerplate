import React from "react";

class Home extends React.Component {
  render() {
    const { name, address } = this.props;
    return (
      <div className="container">
        <h4 className="name">{name}</h4>
        <b className="address">{address}</b>
      </div>
    );
  }
}

export default Home;
