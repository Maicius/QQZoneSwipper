import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Talk } from '../icon/talk.svg';

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
        {this.props.page === 8 ? (
          <div className="section page page-9">
            <div className="bottom"></div>
            <div className="calendar-wrapper">
              <div className="calendar"></div>
              <div className="man"></div>
            </div>
            <div className="leaves-wrapper"></div>
            <div className="content">
                  <p style={styles.fadeInUp2s}>
                  你注意到了吗
                    </p>
                  <p style={styles.fadeInUp2s}>
                    有
                    <span className="stress">{this.props.info.stranger_ratio}</span>
                    的好友
                  </p>
                  <p style={styles.fadeInUp2s}>
                    近一年没有出现在你的空间了
                  </p>
                  <p style={styles.fadeInUp2s}>
                    很多朋友
                  </p>
                  <p style={styles.fadeInUp2s}>
                    都注定只是人生的匆匆过客
                  </p>
            </div>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
