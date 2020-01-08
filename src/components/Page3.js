import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Line } from '../icon/line.svg';

class Page2 extends Component {
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
        {this.props.page === 3 ? (
          <div className="page">
            <Line className="mb20"/>
            <p style={styles.fadeInUp1s}>与此同时</p>
            <p style={styles.fadeInUp1s} className="mb20">
              在你的敲击下
            </p>
            {this.props.info.addLines !== 0 ? (
              <p style={styles.fadeInUp2s}>
                增加了
                <span className="stress">{this.props.info.addLines}</span>
                行代码
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>没有增加代码</p>
            )}
            {this.props.info.addLines !== 0 ? (
              <p style={styles.fadeInUp2s}>
                删除了
                <span className="stress">{this.props.info.deleteLines}</span>
                行代码
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>没有删除代码</p>
            )}
            {this.props.info.addLines !== 0 ? (
              <p style={styles.fadeInUp2s}>
                总共有
                <span className="stress">{this.props.info.totalLines}</span>
                行代码被修改
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>没有代码被修改</p>
            )}
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page2;
