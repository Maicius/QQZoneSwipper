import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Repo } from '../icon/repo.svg';

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
        {this.props.page === 2 ? (
          <div className="page">
            <Repo className="mb20"/>
            <p style={styles.fadeInUp1s}>这一年里</p>
            <p style={styles.fadeInUp1s} className="mb20">
              你一共
            </p>
            {this.props.info.languageNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                使用了
                <span className="stress">{this.props.info.languageNums}</span>
                种编程语言
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>敲击了很多文本</p>
            )}
            {this.props.info.repoNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                通过GitHub向
                <span className="stress">{this.props.info.repoNums}</span>
                个代码仓库的主分支
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>在本地通过多个代码仓库</p>
            )}
            {this.props.info.commitNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                提交了
                <span className="stress">{this.props.info.commitNums}</span>
                次代码
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>提交了多次代码</p>
            )}
            {this.props.info.eventNums !== 0 ? (
              <p style={styles.fadeInUp2s}>
                活跃了
                <span className="stress">{this.props.info.eventNums}</span>
                天的时间
              </p>
            ) : (
              <p style={styles.fadeInUp2s}>在社区中比较沉寂</p>
            )}
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page2;
