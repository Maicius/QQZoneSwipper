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
          <div className="section page page-4">
            <div className="wave1 wave1-1">
              <div className="ripple"></div>
            </div>
            <div className="wave1 wave1-2"></div>
            <div className="wave2 wave2-1"></div>
            <div className="wave2 wave2-2"></div>
            <div className="circle"></div>
            <div className="man-wrapper">
              <div className="splash"></div>
              <div className="man"></div>
            </div>
            <div className="content">
              <p style={styles.fadeInUp1s}>{this.props.info.years}年来</p>
              <p style={styles.fadeInUp1s} className="mb20">
              </p>
              {this.props.info.mood_num !== 0 ? (
                <p style={styles.fadeInUp2s}>
                  你一共发了
                  <span className="stress">{this.props.info.mood_num}</span>
                  条说说
                </p>
              ) : (
                <p style={styles.fadeInUp2s}>没有发过说说</p>
              )}
              {this.props.info.rz_num !== 0 ? (
                <p style={styles.fadeInUp2s}>
                  写了
                  <span className="stress">{this.props.info.rz_num}</span>
                  篇日志
                </p>
              ) : (
                <p style={styles.fadeInUp2s}>没有写过日志</p>
              )}
              {this.props.info.photo_num !== 0 ? (
                <p style={styles.fadeInUp2s}>
                  上传了
                  <span className="stress">{this.props.info.photo_num}</span>
                  张照片
                </p>
              ) : (
                <p style={styles.fadeInUp2s}>没有上传过照片</p>
              )}
              {this.props.info.friend_num !== 0 ? (
                <p style={styles.fadeInUp2s}>
                  添加了
                  <span className="stress">{this.props.info.friend_num}</span>
                  位好友
                </p>
              ) : (
                <p style={styles.fadeInUp2s}>没有添加好友</p>
              )}
              {this.props.info.mood_num === 0 && this.props.info.rz_num && this.props.info.photo_num  ? (
              <p style={styles.fadeInUp2s}>你真是一个佛系玩家</p>
              ) : (
                <p style={styles.fadeInUp2s}>这里记录着你成长的点点滴滴</p>
              )}
            </div>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page2;
