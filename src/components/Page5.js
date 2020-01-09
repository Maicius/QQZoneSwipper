import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Moon } from '../icon/moon.svg';
import { ReactComponent as Line } from '../icon/line.svg';
import ReactEcharts from "echarts-for-react";
require('echarts-wordcloud');

class Page1 extends Component {

  getOption(data) {
    return {
        backgroundColor:'#fff',
        tooltip: {
            show: false
        },
        series: [{
            type: 'wordCloud',
            gridSize: 1,
            sizeRange: [12, 55],
            rotationRange: [-45, 0, 45, 90],
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' +
                                Math.round(Math.random() * 255) +
                                ', ' + Math.round(Math.random() * 255) +
                                ', ' + Math.round(Math.random() * 255) + ')'
                    }
                }
            },
            left: 'center',
            top: 'center',
            shape: 'circle',
            width: '100%',
            height: '100%',
            right: null,
            bottom: null,
            // width: 300,
            // height: 200,
            // top: 20,
            data: data
          }]
        };
  }
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
        {this.props.page === 5 && this.props.info.total_like > 0? (
            <div className="section page page-6">
            <div class="night night-1"></div>
            <div class="night night-2"></div>
            <div class="star star-1"></div>
            <div class="star star-2"></div>
            <div class="star star-3"></div>
            <div class="star star-4"></div>
            <div class="meteor meteor-1"></div>
            <div class="meteor meteor-2"></div>
            <div className="echart_dom">
                    <ReactEcharts
                      option={this.getOption(this.props.info.total_like_list)}
                      notMerge={true}
                      lazyUpdate={true}
                      theme={"theme_name"}
                      onChartReady={this.onChartReadyCallback}
                      />
                  </div>
            <div class="bottom-wrapper">
              <div class="chair">
                <div class="light"></div>
              </div>
              <div class="man"></div>
              <div class="cat cat-1"></div>
              <div class="cat cat-2"></div>
              <div class="shadow"></div>
            </div>
            <div class="content">
              {this.props.info.total_like !== 0 ? (
                <div>
                  <p style={styles.fadeInUp2s}>超过 <span className="stress">{this.props.info.total_like_people}</span> 位好友 </p>
                  <p style={styles.fadeInUp2s}>
                    给你累计点了
                    <span className="stress">{this.props.info.total_like}</span>
                    个赞
                  </p>
                  <p style={styles.fadeInUp2s}> 还有 <span className="stress">{this.props.info.total_cmt_people}</span> 位好友 </p>
                  <p style={styles.fadeInUp2s}>
                    在你的评论区留言了
                    <span className="stress">{this.props.info.total_cmt}</span>
                    次
                  </p>
                  <p className="mt-35" style={styles.fadeInUp2s}>他们的名字，你应该很熟悉</p>
                  
                </div>

              ) : null}
              
            </div>
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
