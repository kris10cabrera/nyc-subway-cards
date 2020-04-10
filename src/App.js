import React from 'react';
import './App.scss';
import source from './images/made_by_kris10cabrera.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      x: 0, 
      y: 0,
      windowWidth: 0, 
      windowHeight: 0 
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    const {x, y, windowHeight, windowWidth} = this.state;
    return (
      <div>
        <h1>
          cards I've collected from my subway rides in New York City
        </h1>
        <a href="https://kristencabrera.com/"><img className="source" src={source} alt="Made by kris10cabrera alongside a collage with an NYC trash bag, the statue of liberty, and a slice of pizza."/></a>
        <div className="mouse-area" onMouseMove={this.handleMouseMove}>
          <img src="airport_back.png" alt="Back of MTA card" className="first subway-card" style={{width: x, height: y}}  />
          <img src="metrocard_front.png" alt="Front of MTA card" style={{width: windowWidth - x, height: windowHeight - y}}  className="second subway-card" />
          <img src="port_back.png" alt="Back of MTA card" className="third subway-card" style={{width: x, height: y}}  />
          <img src="bowie_front.png" alt="Limited edition David Bowie MTA card"  style={{width: windowWidth - x, height: windowHeight - y}} className="fourth subway-card" />
        </div>
      </div>
    );
  }
}


export default App;
