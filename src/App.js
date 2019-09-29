import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import { ThemeProvider } from "./Context/ThemeContext"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      repositories:[]
    }
  }


  async componentDidMount() {
    // const siteId= this.props.match.params.site
    const data = await fetch("https://api.github.com/users/silvanahiga/repos")  //aca va site porque en el otro lado le dijimos que era site si es id ponemos id
    const jsonData = await data.json();
    console.log(jsonData)
    console.log(data)
    const datos = jsonData
    console.log(datos)

    this.setState({
      repositories:datos

    })
  }


  render(){
  return (
    <div className="App">
    
    <Navbar datos={this.setState.repositories}/>
    <Main  />
    <ThemeProvider value={this.state.repositories}>
    
    <Projects  />
  
    </ThemeProvider>


   
    </div>
  );

  }
}

export default App;
