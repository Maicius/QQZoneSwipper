import React, { Component } from 'react';

import './net_main.css';

import Swiper from 'react-id-swiper';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
    };
    // 微信
    document.addEventListener("WeixinJSBridgeReady", function () {
      document.getElementById('audio_player').play();
  },false);
  }

  render() {
    const params = {
      height: document.body.clientHeight,
      autoHeight: true,
      direction: 'vertical',
      mousewheel: true,
      slidesPerView: 1,
      on: {
        init: () => {
          this.setState({ page: 1 });
        },
        slideNextTransitionEnd: () => {
          this.setState({ page: this.state.page + 1 });
        },
        slidePrevTransitionEnd: () => {
          this.setState({ page: this.state.page - 1 });
        },
      },
    };
    const styles = {
      section1: {
        background: `url(./back.jpg) no-repeat top center`,
        backgroundSize: 'cover',
      },
      section: {
        background: `url(./back.jpg) no-repeat top center`,
        backgroundSize: 'cover',
      },
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
      <div className="Slide">
        <StyleRoot>
          {/* <audio id="audio_player" autoPlay="autoplay">
            <source id="src_mp3" type="audio/mp3" src="http://githubreport.oss-cn-beijing.aliyuncs.com/music.mp3" />
          </audio> */}
          <Swiper {...params}>
            <section className="section page page-1 page-home">
              <Page1 page={this.state.page} info={this.props.info}/>
            </section>
            <section>
              <Page2 page={this.state.page} info={this.props.info} />
            </section>
            <section>
              <Page3 page={this.state.page} info={this.props.info} />
            </section>
            <section>
              <Page4 page={this.state.page} info={this.props.info} />
            </section>
            <section>
              <Page5 page={this.state.page} info={this.props.info} />
            </section>
            <section>
              <Page6 page={this.state.page} info={this.props.info} />
            </section>
            <section>
              <Page7 page={this.state.page} info={this.props.info} />
            </section>
            <section>
              <Page8 page={this.state.page} info={this.props.info} />
            </section>
            <section style={styles.section}>
              <Page9 page={this.state.page} info={this.props.info} />
            </section>
            <section style={styles.section}>
              <Page10 page={this.state.page} info={this.props.info} />
            </section>
            <section style={styles.section}>
              <Page11 page={this.state.page} info={this.props.info} />
            </section>
            <section style={styles.section}>
              <Page12 page={this.state.page} info={this.props.info} octokit={this.props.octokit} />
            </section>
          </Swiper>
        </StyleRoot>
      </div>
    );
  }
}

export default Slide;
