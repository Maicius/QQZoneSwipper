import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';

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
           <section className="section page page-15 page-14">
            <div class="light light-1"></div>
            <div class="light light-2"></div>
             <div class="arrow"></div>
             <div className="content mt-65" >
              <p style={styles.fadeInUp1s}>本项目纯属娱乐</p>
              <p style={styles.fadeInUp1s}>数据可能存在误差</p>
              <p style={styles.fadeInUp1s}>如您喜欢</p>
              <p style={styles.fadeInUp1s}>欢迎分享</p>
              <div className="qrcode" style={styles.fadeInUp2s}>
              </div>
              <div class="buttons" style={styles.fadeInUp3s}>
                  <a href="http://app.xiaomaidong.com" target="_blank" rel="noopener noreferrer" className="button">返回网站首页</a>
                  <a href="https://github.com/Maicius/QQZoneMood" target="_blank" rel="noopener noreferrer" className="button">查看项目文档/源码 </a>
                  <a href="http://www.xiaomaidong.com" target="_blank" rel="noopener noreferrer" className="button">查看更多好玩的东西</a>
                 {/* <a href="http://www.xiaomaidong.com" class="button">访问小麦冬</a> */}
              </div>
            </div>
           </section>
      </StyleRoot>
    );
  }
}

export default Page1;
