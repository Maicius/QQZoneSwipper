import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Day } from '../icon/day.svg';

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
        {this.props.info.specialDay.date !== '' && this.props.page === 4 ? (
          <div className="page">
            <Day className="mb20"/>
            <p style={styles.fadeInUp1s} className="stress">
             日
            </p>
            <p style={styles.fadeInUp1_5s} className="mb20">
              大概是很特别的一天
            </p>
            <p style={styles.fadeInUp2s}>这一天里</p>
            <p style={styles.fadeInUp2_5s}>
              你向
              <span className="stress">{this.props.info.specialDay.repo}</span>
              仓库提交了
            </p>
            <p style={styles.fadeInUp3s}>
              <span className="stress">{this.props.info.specialDay.count}</span>
              次代码
            </p>
          </div>
        ) : this.props.page === 4 ? (
          <div className="page">
          <Day/>
            <p style={styles.fadeInUp1s}>你没有什么特别的一天</p>
            <p style={styles.fadeInUp1s}>你的每天都一样精彩</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
