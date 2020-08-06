import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Time } from '../icon/time.svg';
import {getWordCloudOption} from '../utils/helper';
import ReactEcharts from 'echarts-for-react';
import FontAwesomeIcon from '@fortawesome/fontawesome'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
require('echarts-wordcloud');

class Page7 extends Component {
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
          <div className="section page page-8">
              {/* <div className="echart_dom_top">
                    <ReactEcharts
                      option={getWordCloudOption(this.props.info.my_top_words)}
                      notMerge={true}
                      lazyUpdate={true}
                      theme={"theme_name"}
                      onChartReady={this.onChartReadyCallback}
                      />
              </div>
              <div className="echart_dom_bottom">
                    <ReactEcharts
                      option={getWordCloudOption(this.props.info.friend_top_words)}
                      notMerge={true}
                      lazyUpdate={true}
                      theme={"theme_name"}
                      onChartReady={this.onChartReadyCallback}
                      />
              </div> */}
              <div class="bottom"></div>
              <div class="disc">
                <div class="roll"></div>
                <div class="man"></div>
              </div>
              {this.props.page === 7 ? (
              <div className="content">
                <p style={styles.fadeInUp1s} className="para mt-10 stress fs-18">
                {this.props.info.early_mood_date}
                这一天你睡得很晚
                </p>
                <p style={styles.fadeInUp1s}>
                {this.props.info.early_mood_time} 点过了你还在刷空间
                </p>
                <p style={styles.fadeInUp1s}>
                  你还在说：
                </p>
                <p style={styles.fadeInUp1_5s}>
                    “{this.props.info.early_mood_content}”
                  </p>
              </div>
              ) : null}
            </div>

      </StyleRoot>
    );
  }
}

export default Page7;
