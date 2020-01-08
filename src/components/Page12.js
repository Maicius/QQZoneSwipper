import React, { Component } from 'react';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Slide.css';
import Button from 'antd/lib/button';
import Alert from 'antd/lib/alert';
import Modal from 'antd/lib/modal';
import { OWNER, REPO, USERNAME } from '../utils/constant';
import { queryParse } from '../utils/helper';

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      failed: false,
      saveSuccess: false,
    };
    this.issueNum = 1;
    const query = queryParse();
    if (localStorage.getItem(USERNAME) === query.username) {
      this.state.isSelf = true;
    } else {
      this.state.isSelf = false;
    }
  }

  showSaveSuccess = () => {
    this.setState({
      saveSuccess: true,
    });
  };

  handleShare = () => {
    const confirm = Modal.confirm;
    confirm({
      title: '确认分享你的2018么？',
      content: '确定后信息将公开在GitHub中，可再使用当前软件的分享功能进行分享',
      cancelText: '取消',
      okText: '确定',
      onOk: async () => {
        return this.props.octokit.issues
          .createComment({ owner: OWNER, repo: REPO, number: this.issueNum, body: JSON.stringify(this.props.info) })
          .then(() => {
            console.log('success');
            this.showSaveSuccess();
          })
          .catch(() => {
            this.setState({ failed: true });
          });
      },
      onCancel() {},
    });
  };

  handleUnsubscribe = () => {
    window.location.href = 'https://github.com/guanpengchn/github-annual-report/issues/1';
  }

  handleBack = () => {
    window.location.href = '/';
  };

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
        {this.props.page === 12 ? (
          <div className="page">
            
          </div>
        ) : null}
      </StyleRoot>
    );
  }
}

export default Page1;
