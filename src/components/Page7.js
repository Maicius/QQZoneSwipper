import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Time } from '../icon/time.svg';

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
        {this.props.info.likePeriod.name !== '' && this.props.page === 7 ? (
          <div>
                <div class="wave1 wave1-1">
                <div class="ripple"></div>
              </div>
              <div class="wave1 wave1-2"></div>
              <div class="wave2 wave2-1"></div>
              <div class="wave2 wave2-2"></div>
              <div class="circle"></div>
              <div class="man-wrapper">
                <div class="splash"></div>
                <div class="man"></div>
              </div>
              <div class="content">
                <p class="para"><span class="fc-red">5</span>月<span class="fc-red">28</span>日大概是很特别的一天</p>
                <p class="para para-2">这一天里</p>
                <p class="para para-2">TA把<span class="fc-red">Lorde</span>的<span class="fc-red">《Liability》</span>
                </p>
                <p class="para para-2">反复听了<span class="fc-red fs-18">162</span>次</p>
              </div>
            </div>
        ) : this.props.page === 7 ? (
          <div className="page">
          <Time className="mb20"/>
            <p style={styles.fadeInUp1s}>你没有固定的提交代码时间段</p>
            <p style={styles.fadeInUp1_5s}>无论是繁忙的工作日</p>
            <p style={styles.fadeInUp2s}>还安静的是周末</p>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
