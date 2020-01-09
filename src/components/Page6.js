import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import { ReactComponent as Focus } from '../icon/focus.svg';


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
    var friend_list = [];
    for (var i = 0; i < this.props.info.total_like_list.length; i++) {
      var item = this.props.info.total_like_list[i];
      friend_list.push(<p style={styles.fadeInUp2s}>{item.user}, <span className="stress">{item.num}</span>次</p>)
    }

    return (
      <StyleRoot>
        {this.props.page === 6 && this.props.info.total_cmt > 0? (
            <div className="page">
            <Focus className="mb20"/>
            {this.props.info.total_like !== 0 ? (
              <p style={styles.fadeInUp2s}>
                你的说说一共收到了
                <span className="stress">{this.props.info.total_cmt}</span>
                条评论
              </p>
            ) : null}
            {
              friend_list
            }
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
