import React from "react";
import "./style.css"


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []


    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/silvanahiga");
    const jsonData = await data.json();
    console.log(data)
    console.log(jsonData)
    console.log(jsonData.bio)
    const info = jsonData


    this.setState({
      data: info

    })

  }


  render() {
    return (
      <div className="main_">
        <div className="wrap_main">

        </div>
        <div className="avatar"><img src={this.state.data.avatar_url} alt="" /></div>
        <h1 className="user_name">{this.state.data.login}</h1>
        <h4>{this.state.data.bio}</h4>


      </div>
    )
  }
}






export default Main