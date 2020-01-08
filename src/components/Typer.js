import React, { Component } from 'react'
import Typed from 'typed.js';

class Typer extends Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 50,
      // backSpeed: 50
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
    this.typed.onLastStringBackspaced = (self) => {console.log('sdfa')}
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre', color: 'rgb(156,74,27)' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
        {/* <button onClick={() => this.typed.toggle()}>Toggle</button>
        <button onClick={() => this.typed.start()}>Start</button>
        <button onClick={() => this.typed.stop()}>Stop</button>
        <button onClick={() => this.typed.reset()}>Reset</button>
        <button onClick={() => this.typed.destroy()}>Destroy</button> */}
      </div>
    );
  }
}
export default Typer