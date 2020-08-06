import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Moon } from '../icon/moon.svg';
import { ReactComponent as Line } from '../icon/line.svg';
import {getWordCloudOption} from '../utils/helper';
import ReactEcharts from 'echarts-for-react';
require('echarts-wordcloud');
class Page5 extends Component {

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
                      option={getWordCloudOption(this.props.info.total_like_list)}
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
            {this.props.page === 5 && this.props.info.total_like_num > 0 ? (
              <div class="content">
                
                {this.props.info.total_like_num !== 0 ? (
                  <div>
                    <p style={styles.fadeInUp1s}>
                      这么多年来
                    </p>
                    <p style={styles.fadeInUp1s}>
                      小伙伴们坚持不懈的
                    </p>
                    <p style={styles.fadeInUp2s} className="mt-35">
                     给你点赞
                      <span className="stress">{this.props.info.total_like_num}</span>
                      次
                    </p>
                    <p style={styles.fadeInUp2s}>
                      以及评论
                      <span className="stress">{this.props.info.total_cmt_num}</span>
                      次
                    </p>
                    {this.props.info.avg_like_num >= 2 ? (
                      <p style={styles.fadeInUp2s}>
                      平均每条说说就有点赞
                        <span className="stress">{this.props.info.avg_like_num}</span>
                        次
                      </p>
                      ) : null} 
                    <p className="mt-35" style={styles.fadeInUp2s}>他们的名字，你应该很熟悉</p>
                  </div>
                  
                ) : null}
                
              </div>
            ) : this.props.page === 5 ? (
              <div className="content">
                <p style={styles.fadeInUp1s}>你的空间非常安静</p>
                <p style={styles.fadeInUp1s}>没有人来点赞或评论</p>
              </div>
            ) : null}
          </div>
        
      </StyleRoot>
    );
  }
}

export default Page5;
