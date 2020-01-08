import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Focus } from '../icon/focus.svg';


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
        {this.props.info.mostDay.repo !== '' && this.props.page === 6 ? (
          <div className="page">
          <Focus className="mb20"/>
            <p style={styles.fadeInUp1s}>这一年</p>
            <p style={styles.fadeInUp1s}>
              你有
              <span className="stress">{this.props.info.mostDay.count}</span>
              天都向
            </p>
            <p style={styles.fadeInUp1s} className="mb20">
              <span className="stress">{this.props.info.mostDay.repo}</span>
              提交了代码
            </p>
            <p style={styles.fadeInUp2s}>所有熟悉的项目中</p>
            <p style={styles.fadeInUp2s}>你对它最专一</p>
          </div>
        ) : this.props.page === 6 ? (
          <div className="page">
          <Focus className="mb20"/>
            <p style={styles.fadeInUp1s}>这一年</p>
            <p style={styles.fadeInUp1_5s}>你没有很心仪的项目</p>
            <p style={styles.fadeInUp2s}>大概在项目管理上</p>
            <p style={styles.fadeInUp2_5s}>有了不少提高</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
