import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Time } from '../icon/time.svg';

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
        {this.props.info.likePeriod.name !== '' && this.props.page === 7 ? (
          <div className="page">
          <Time className="mb20"/>
            <p style={styles.fadeInUp1s}>
              你喜欢在<span className="stress">{this.props.info.likePeriod.name}</span>提交代码
            </p>
            <p style={styles.fadeInUp1_5s}>
              特别是
              {this.props.info.likeWeekType.name === '工作日' ? '繁忙的' : '安静的'}
              <span className="stress">{this.props.info.likeWeekType.name}</span>
            </p>
            <p style={styles.fadeInUp2s}>365天中</p>
            <p style={styles.fadeInUp2_5s}>
              你有<span className="stress">{this.props.info.likeWeekType.count}</span>个{this.props.info.likeWeekType.name}
              提交了代码
            </p>
          </div>
        ) : this.props.page === 7 ? (
          <div className="page">
          <Time className="mb20"/>
            <p style={styles.fadeInUp1s}>你没有固定的提交代码时间段</p>
            <p style={styles.fadeInUp1_5s}>无论是繁忙的工作日</p>
            <p style={styles.fadeInUp2s}>还安静的是周末</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
