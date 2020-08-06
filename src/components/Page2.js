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

          <div className="section page page-2">
            <div className="night night-1"></div>
            <div className="night night-2"></div>
            <div className="stars">
              <span className="star star-1"></span>
              <span className="star star-2"></span>
              <span className="star star-3"></span>
              <span className="star star-4"></span>
            </div>
            <div className="meteors">
              <span className="meteor meteor-1"></span>
              <span className="meteor meteor-2"></span>
            </div>
            <div className="moon-wrapper"></div>
            <div className="moon">
              <div className="swing">
                <div className="man"></div>
              </div>
            </div>
            <div className="building building-1"></div>
          {this.props.page === 2 ? (
            <div className="content">
              <p style={styles.fadeInUp1s} className="para mt-10 stress fs-18">
              {this.props.info.first_time}
              </p>
              <p style={styles.fadeInUp1s} className="para mt-10">
               你第一次登陆了QQ空间
                </p>
              {this.props.info.first_mood_time !== "" ? (
                <p style={styles.fadeInUp2s} className="para mt-35">
                  <p className="stress fs-18">{this.props.info.first_mood_time}</p>
                  你发出了第一条动态
                </p>
              ) : null}
              {this.props.info.first_friend_time !== "" ? (
                <p style={styles.fadeInUp2s} className="para mt-35">
                  <p className="stress fs-18">{this.props.info.first_friend_time}</p>
                  你添加了第一位好友
                  <span className="stress fs-18">{this.props.info.first_friend}</span>
                </p>
              ) : null} 
            </div>
          ) : null}
          </div>
        
      </StyleRoot>
    );
  }
}

export default Page2;
