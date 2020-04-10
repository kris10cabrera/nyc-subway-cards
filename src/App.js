import React from 'react';
import './App.scss';
import source from './images/made_by_kris10cabrera.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      x: '60%', 
      y: '50%',
      containerWidth: 0, 
      containerHeight: 0 
    };
  
    this.myInput = React.createRef()
  }

  componentDidMount() {
    console.log(this.myInput.current.offsetWidth + ' ' + this.myInput.current.offsetHeight)
    this.setState({ containerWidth: this.myInput.current.offsetWidth, containerHeight: this.myInput.current.offsetHeight });
  }

  handleMouseMove = event => {
    console.log('hello')
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    const {x, y, containerHeight, containerWidth} = this.state;
    return (
      <div >
        <h1>
          cards I've collected from my subway rides in <span className="no-br">New York City</span>
        </h1>

        <button>let's boogy</button>
        <a href="https://kristencabrera.com/"><img className="source" src={source} alt="Made by kris10cabrera alongside a collage with an NYC trash bag, the statue of liberty, and a slice of pizza."/></a>
        <div onMouseMove={this.handleMouseMove} onTouchMove={this.handleMouseMove} className="mouse-area-wrapper">
        <div className="mouse-area" ref={this.myInput} >
        <img src="bowie_front.png" alt="Limited edition David Bowie MTA card" style={{width: x, height: y}} className="first subway-card" />
        <img src="port_back.png" alt="Back of MTA card" className="second subway-card" style={{width: containerWidth - x, height: containerHeight - y}}  />
          <img src="metrocard_front.png" alt="Front of MTA card" style={{width: x, height: y}}  className="third subway-card" />

          <img src="airport_back.png" alt="Back of MTA card" className="fourth subway-card" style={{width: containerWidth - x, height: containerHeight - y}} />
        </div>
        </div>

      </div>
    );
  }
}


export default App;
