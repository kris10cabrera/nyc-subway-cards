import React from 'react';
import './App.scss';
import source from './images/made_by_kris10cabrera.png'
import MediaQuery from 'react-responsive'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: false,
      x: '60%',
      y: '50%',
      containerWidth: 0,
      containerHeight: 0
    };
    this.myInput = React.createRef()
  }

  componentDidMount() {
    this.setState({ containerWidth: this.myInput.current.offsetWidth, containerHeight: this.myInput.current.offsetHeight });
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  handleClick = () => {
    this.setState({ action: !this.state.action })
  }

  handleClickDown = () => {
    if (this.state.action) {
      this.setState({ action: !this.state.action })
    }
  }


  render() {
    const { x, y, containerHeight, containerWidth, action } = this.state;
    return (
      <>
        <div className="intro">
          <header>
            <h1>
              cards I've collected from my subway rides in <span className="no-br">New York City</span>
            </h1>
            <MediaQuery minDeviceWidth={1000}>
              <button onClick={this.handleClick} className={action ? 'border' : undefined}>{action ? 'click the screen to freeze' : 'let’s dance'}</button>
            </MediaQuery>
          </header>
          <MediaQuery maxDeviceWidth={1000}>
            <h2 className="mobile-button">this is probably more fun on a computer</h2>
          </MediaQuery>
          <a href="https://kristencabrera.com/"><img className="source" src={source} alt="Made by kris10cabrera alongside a collage with an NYC trash bag, the statue of liberty, and a slice of pizza." /></a>
        </div>

        <div onMouseMove={action ? this.handleMouseMove : undefined} onMouseDown={this.handleClickDown} onTouchMove={action ? this.handleMouseMove : undefined} className={action ? `mouse-area-wrapper link-cursor` : `mouse-area-wrapper`}>
          <div className="mouse-area" ref={this.myInput} >
            <img src="images/port_back.png" alt="Back of MTA card" className="second subway-card" style={{ width: containerWidth - x, height: containerHeight - y }} />
            <img src="images/metrocard_front.png" alt="Front of MTA card" style={{ width: x, height: y }} className="third subway-card" />
            <img src="images/airport_back.png" alt="Back of MTA card" className="fourth subway-card" style={{ width: containerWidth - x, height: containerHeight - y }} />
            <img src="images/bowie_front.png" alt="Limited edition David Bowie MTA card" style={{ width: x, height: y }} className="first subway-card" />
          </div>
        </div>

        <MediaQuery maxDeviceWidth={1000}>
          <div className="mobile-card-wrapper">
            <img src="images/bowie_front.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card" />
            <img src="images/bowie_back.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card invert" />
            <img src="images/airport_back.png" alt="Back of MTA card" className="mobile-subway-card" />
            <img src="images/metrocard_front.png" alt="Front of MTA card" className="mobile-subway-card" />
            <img src="images/port_back.png" alt="Back of MTA card" className="mobile-subway-card" />
            <img src="images/metrocard_back.png" alt="Front of MTA card" className="mobile-subway-card invert" />
            <img src="images/port_front.png" alt="Front of MTA card" className="mobile-subway-card" />
            <img src="images/bowie_front.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card invert" />
            <img src="images/bowie_back.png" alt="Limited edition David Bowie MTA card" className="mobile-subway-card" />
            <img src="images/airport_back.png" alt="Back of MTA card" className="mobile-subway-card invert" />
            <img src="images/metrocard_back.png" alt="Front of MTA card" className="mobile-subway-card" />
            <img src="images/port_back.png" alt="Back of MTA card" className="mobile-subway-card invert" />
          </div>
        </MediaQuery>
      </>
    );
  }
}

export default App;
