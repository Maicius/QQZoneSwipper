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
        
        <section class="section page page-10">
          <div class="water"></div>
            <div class="ripple">
              <div class="bottle-wrapper">
                <div class="bottle bottle-1">
                  <div class="man"></div>
                </div>
                <div class="bottle bottle-2"></div>
              </div>
            </div>
            <div class="rain">
              <div class="drop drop-1"></div>
              <div class="drop drop-2"></div>
              <div class="drop drop-3"></div>
            </div>
            {this.props.page === 9 ?    
            <div className="content">
                  <p style={styles.fadeInUp1s}>但是</p>
                  <p style={styles.fadeInUp1s}>你注意到了吗</p>
                  <p style={styles.fadeInUp1s} className="mb20"></p>
                  { this.props.non_activate_time < 1 ? (
                    <div>
                      <p style={styles.fadeInUp2s}>
                          有
                          <span className="stress">{this.props.info.non_activate_friend_num}</span>
                          个曾经很活跃的小伙伴
                      </p>
                      <p style={styles.fadeInUp2s}>
                        近一年没有在你的空间出现了
                        </p>
                        <p style={styles.fadeInUp2s}>
                        或许，相濡以沫
                        </p>
                        <p style={styles.fadeInUp2s}>
                        不如相忘于江湖...
                        </p>
                    </div>) : 
                      <div>
                        <p style={styles.fadeInUp2s}>
                          有超过
                          <span className="stress">{this.props.info.non_activate_time}</span>
                          年的时间
                        </p>
                        <p style={styles.fadeInUp2s}>
                          你没有更新过动态了
                        </p>
                        <p style={styles.fadeInUp2s}>
                          和列表上的朋友们，还有联系吗？
                        </p>
                      </div>

                  }
                  
            </div>
        : null}
        <div class="tips">欸，有彩蛋吗？滑动看下~</div>
      </section> 
      </StyleRoot>
    );
  }
}

export default Page1;
