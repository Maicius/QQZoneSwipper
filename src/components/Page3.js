import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';

class Page3 extends Component {
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
          <div className="section page page-13">
            <div className="bottom"></div>
            <div className="glass glass-1">
              <div className="s">
                <div className="c"></div>
              </div>
            </div>
            <div className="glass glass-2">
              <div className="s">
                <div className="c"></div>
              </div>
            </div>
            <div className="glass glass-3">
              <div className="sand sand-1"></div>
              <div className="sand sand-2"></div>
              <div className="sand sand-3"></div>
              <div className="man"></div>
            </div>
            
              <div className="line"></div>
            { this.props.page === 3 ? (
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
                {/* {this.props.info.rz_num !== 0 ? (
                  <p style={styles.fadeInUp2s}>
                    写了
                    <span className="stress">{this.props.info.rz_num}</span>
                    篇日志
                  </p>
                ) : (
                  <p style={styles.fadeInUp2s}>没有写过日志</p>
                )} */}
                {this.props.info.photo_num !== 0 ? (
                  <p style={styles.fadeInUp2s}>
                    上传了
                    <span className="stress">{this.props.info.photo_num}</span>
                    张照片
                  </p>
                ) : (
                  <p style={styles.fadeInUp2s}>没有上传过照片</p>
                )}
                {this.props.info.total_word_num !== 0 ? (
                  <p style={styles.fadeInUp2s}>
                    累计超过了
                    <span className="stress">{this.props.info.total_word_num}</span>
                    字
                  </p>
                ) : null}
                {this.props.info.mood_num === 0 && this.props.info.rz_num === 0 && this.props.info.photo_num === 0  ? (
                <p style={styles.fadeInUp2s}>你莫不是个小号吧</p>
                ) : (
                  <p style={styles.fadeInUp2s}>点点滴滴，仿佛都是青春的痕迹</p>
                )}
            </div>
             ) : null}
          </div>
      </StyleRoot>
    );
  }
}

export default Page3;
