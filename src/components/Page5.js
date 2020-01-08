import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Moon } from '../icon/moon.svg';

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
        {this.props.info.latestDay.date !== '' && this.props.page === 5 ? (
          <div className="page">
          <Moon className="mb20"/>
            <p style={styles.fadeInUp1s} className="stress">
             月日
            </p>
            <p style={styles.fadeInUp1s}>这一天你睡得很晚</p>
            <p style={styles.fadeInUp1_5s} className="mb20">
              <span className="stress">
                点分
              </span>
              你还在与代码为伴
            </p>
            <p style={styles.fadeInUp2s}>那一刻</p>
            <p style={styles.fadeInUp2s}>
              你向
              <span className="stress"></span>
              仓库提交了代码
            </p>
          </div>
        ) : this.props.page === 5 ? (
          <div className="page">
          <Moon className="mb20"/>
            <p style={styles.fadeInUp1s}>每一天</p>
            <p style={styles.fadeInUp1s}>你休息得都很好</p>
            <p style={styles.fadeInUp1s}>早早地完成了代码提交工作</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
