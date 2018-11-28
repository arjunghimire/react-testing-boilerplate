import React from "react";

class Home extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="container">
        {items.map((item, index) => {
          return (
            <div className="item" key={index}>
              {/* {item.name} */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
