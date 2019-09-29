import React from "react";
import "./style.css"


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">Silvana Higa</div>
        {this.props.datos}
      </div>
    )
  }
}






export default Navbar