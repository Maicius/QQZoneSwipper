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
        
          <div className="section page page-15">
          <div class="ground">
          <div class="clock-wrapper">
            <div class="min"></div>
            <div class="hour"></div>
          </div>
          <div class="crowd crowd-1"></div>
          <div class="crowd crowd-2"></div>
          <div class="crowd crowd-3"></div>
          <div class="crowd crowd-4"></div>
          <div class="crowd crowd-5"></div>
          <div class="man"></div>
        </div>
        {this.props.page === 8 ? (
            <div className="content">
                  <p style={styles.fadeInUp2s}>
                   你在QQ上遇见了超过
                    <span className="stress">{this.props.info.friend_num}</span>
                    个小伙伴
                  </p>
                  <p style={styles.fadeInUp2s}>
                    他们中有
                    <span className="stress">{this.props.info.cmt_friend_num}</span>
                    人
                  </p>
                  <p style={styles.fadeInUp2s}>
                    与你在评论区有过互动
                  </p>

                  <p style={styles.fadeInUp2s}>
                    也有
                    <span className="stress">{this.props.info.like_friend_num}</span>
                    个小伙伴
                  </p>
                  <p style={styles.fadeInUp2s}>
                  一直在默默给你点赞
                  </p>
                  
            </div>
            ) : null}
          </div>
 
      </StyleRoot>
    );
  }
}

export default Page1;
