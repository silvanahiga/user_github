import React from "react";
import "./style.css"
import ThemeContext from "../../Context/ThemeContext"


class Project extends React.Component {

  static contextType = ThemeContext;
  render() {
    console.log(this.context)

    return (
      <React.Fragment>
        {this.context.slice(0, 6).map((m, key) =>
          <div className="box_project">
            <div className="project">
              <h1 className="project_name">{m.name}</h1>
            </div>
          </div>
        )}
      </React.Fragment>
    )

  }
}






export default Project