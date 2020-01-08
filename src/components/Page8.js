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
          <div className="page">
          <Talk className="mb20"/>
            <p style={styles.fadeInUp1s}>作为社区的一员</p>
            <p style={styles.fadeInUp1_5s}>2018年</p>
            {this.props.info.issueNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                你参与了<span className="stress">{this.props.info.issueNums}</span>个问题的讨论
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>你暗中观察，没有参与到讨论中</p>
            )}
            {this.props.info.starNums !== 0 ? (
              <p style={styles.fadeInUp2_5s}>
                收藏了<span className="stress">{this.props.info.starNums}</span>个仓库
              </p>
            ) : (
              <p style={styles.fadeInUp2_5s}>没发现值得你收藏的仓库</p>
            )}
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
