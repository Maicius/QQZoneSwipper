import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';

class Page6 extends Component {
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
    var friend_list = [];
    for (var i = 0; i < this.props.info.total_like_list.length; i++) {
      var item = this.props.info.total_like_list[i];
      friend_list.push(<p style={styles.fadeInUp2s}>{item.user}, <span className="stress">{item.num}</span>次</p>)
    }

    return (
      <StyleRoot>
       
            <div className="section page page-7">
              <div className="mountain mountain-1"></div>
              <div className="mountain mountain-2">
                <div className="man"></div>
              </div>
              <div className="mountain mountain-3"></div>
              <div className="mountain mountain-4"></div>
              <div className="mountain mountain-5"></div>
              <div className="mountain mountain-6"></div>
              <div className="mountain mountain-7"></div>
              <div className="light-wrapper">
                <div className="light light-1"></div>
                <div className="light light-2"></div>
                <div className="sun"></div>
              </div>
              {this.props.page === 6 ? (
              <div className="content">
                {
                  this.props.info.most_common_friend_num > 0 ? (
                    <div>
                      <p className="para"><span className="stress fs-18">{this.props.info.most_friend}</span>是你很熟悉的朋友吧</p>
                      <p className="para para-15">你们之间一共有<span className="stress">{this.props.info.most_common_friend_num}</span>位共同好友</p>
                    </div>)
                  : (
                    <div>
                      <p className="para">你的QQ好友比较分散</p>
                      <p className="para">都没有人和你有共同好友</p>
                    </div>
                  )
                }
                {
                  this.props.info.most_group_member > 0 ? (
                    <div>
                         <p className="para para-15">你一定经常在<span className="stress fs-18">{this.props.info.most_group}</span>群里混</p>
                          <p className="para para-15">因为你在这里添加了<span className="stress">{this.props.info.most_group_member}</span>位好友</p>
                    </div>
                  ) : null
                }
              </div>
               ) : null}
          </div>
       
      </StyleRoot>
    );
  }
}

export default Page6;
