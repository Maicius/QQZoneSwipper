import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Thanks } from '../icon/thanks.svg';

class Page1 extends Component {
  render() {
    const styles = {
      fadeInUp1s: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp1_5s: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp2s: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp2_5s: {
        animation: 'x 2.5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
      fadeInUp3s: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
      },
    };
    return (
      <StyleRoot>
        {this.props.page === 11 ? (
          <div className="page">
          <Thanks className="mb20"/>
            <h4 style={styles.fadeInUp1s}>感谢有你，一路前行</h4>
            <ul>
              <li style={styles.fadeInUp1_5s}>React</li>
              <li style={styles.fadeInUp1_5s}>rest.js</li>
              <li style={styles.fadeInUp2s}>Ant Design</li>
              <li style={styles.fadeInUp2s}>Axios</li>
              <li style={styles.fadeInUp2_5s}>react-id-swiper</li>
              <li style={styles.fadeInUp2_5s}>react-animations</li>
              <li style={styles.fadeInUp3s}>Typed.js</li>
              <li style={styles.fadeInUp3s}>...</li>
            </ul>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
