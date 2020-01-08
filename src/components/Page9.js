import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Language } from '../icon/language.svg';

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
        {this.props.info.forget.language !== '' && this.props.page === 9 ? (
          <div className="page">
          <Language className="mb20"/>
            <p style={styles.fadeInUp1s}>还记得</p>
            <p style={styles.fadeInUp1_5s}>世界上最好的语言</p>
            <p style={styles.fadeInUp2s}>
              <span className="stress">{this.props.info.forget.language}</span>吗
            </p>
            <p style={styles.fadeInUp2_5s}>你曾经很喜欢</p>
            <p style={styles.fadeInUp3s}>但最近似乎把它遗忘了</p>
          </div>
        ) : this.props.page === 9 ? (
          <div className="page">
          <Language className="mb20"/>
            <p style={styles.fadeInUp1s}>世界上最好的语言</p>
            <p style={styles.fadeInUp1_5s}>引起了无数硝烟</p>
            <p style={styles.fadeInUp2s}>但你岿然不动</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
