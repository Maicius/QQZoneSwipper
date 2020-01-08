import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Prize } from '../icon/prize.svg';

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
        {this.props.info.mostLanguage.name !== '' && this.props.page === 10 ? (
          <div className="page">
          <Prize className="mb20"/>
            <p style={styles.fadeInUp1s}>
              你的年度语言是<span className="stress">{this.props.info.mostLanguage.name}</span>
            </p>
            <p style={styles.fadeInUp1_5s}>一年中</p>
            <p style={styles.fadeInUp2s}>
              你向<span className="stress">{this.props.info.mostLanguage.repoNums}</span>个{this.props.info.mostLanguage.name}
              仓库
            </p>
            <p style={styles.fadeInUp2_5s}>
              提交了<span className="stress">{this.props.info.mostLanguage.commitNums}</span>次代码
            </p>
          </div>
        ) : this.props.page === 10 ? (
          <div className="page">
          <Prize className="mb20"/>
            <p style={styles.fadeInUp1s}>本年度</p>
            <p style={styles.fadeInUp1_5s}>所有的编程语言</p>
            <p style={styles.fadeInUp2s}>在你面前</p>
            <p style={styles.fadeInUp2_5s}>都已自惭形秽</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
