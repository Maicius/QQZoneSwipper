import React, { Component } from 'react';
import './App.css';
import {
  TIPS1_TIME,
  TIPS2_TIME,
} from './utils/constant';

import Alert from 'antd/lib/alert';
import Spin from 'antd/lib/spin';
import Slide from './components/Slide';
import {axiosJSON} from './utils/helper'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      loading: true,
      firstPage: true,
      viewOther: false,
      viewOtherNot: false,
      status: '正在读取数据...',
      requestNums: 0,
      fineshedRequest: 0,
      failedRequest: 0,
      username: "maicius"
    };
    this.info = null;
    this.run();
  }

  componentDidMount() {
    this.timer1 = setInterval(() => this.tips1(), TIPS1_TIME);
    this.timer2 = setInterval(() => this.tips2(), TIPS2_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  }

  tips1() {
    if (this.state.fineshedRequest === this.state.requestNums) {
      clearInterval(this.timer1);
      clearInterval(this.timer2);
    } else {
      this.setState({
        status: `请求完成比：${this.state.fineshedRequest}/${this.state.requestNums}，失败：${this.state.failedRequest}`,
      });
    }
  }

  tips2() {
    this.setState({
      status: `如长时间请求无变化，请刷新或更换浏览器`,
    });
  }

  run = async() => {
    await this.fetchInfo();
  }

  fetchInfo = async() =>  {
    const that = this;
    let qq = this.props.match.params.QQ;
    let name = this.props.match.params.name;
    let password = this.props.match.params.password;
    let url = "http://app.xiaomaidong/data/userinfo/" + qq + "/" + name + "/" + password
    axiosJSON.get(url).then((res) => {
      // that.setState({info: res.data.user});
      if (res.data.finish === 1) {
          that.info = res.data.user;
          console.log(that.info);
          that.info.total_like_list = JSON.parse(that.info.total_like_list)
          that.info.my_top_words = [
            {
              "name": "麦子1",
              "value": "100"
            }, {
              "name": "麦子2",
              "value": "96"
            }, {
              "name": "冬子1",
              "value": "40"
            }, {
              "name": "冬子2",
              "value": "20"
            }, {
              "name": "冬子3",
              "value": "10"
            }
          ];
          that.info.friend_top_words = [
            {
              "name": "麦子1",
              "value": "100"
            }, {
              "name": "麦子2",
              "value": "96"
            }, {
              "name": "冬子1",
              "value": "40"
            }, {
              "name": "冬子2",
              "value": "20"
            }, {
              "name": "冬子3",
              "value": "10"
            }
          ];
          that.setState({loading: false, firstPage: false});
        }
        else {
          that.setState({loading: false, firstPage: true, failed: true});
        } 
      } 
      );
  }

  render() {
    let firstPage = null;
    if (this.state.loading) {
      firstPage = <Spin className="spin" size="large" tip={this.state.status} />;
    }
    const styles = {
      firstPage: {
      },
    };
    return (
      <div className="App">
        {this.state.firstPage ? (
          <div className="firstPage" style={styles.firstPage}>
            {this.state.failed ? (
              <Alert
                className="failed"
                message="获取数据失败，请返回重试"
                type="error"
                closable
                afterClose={this.onClose}
                banner
              />
            ) : null}
            {firstPage}
          </div>
        ) : (
          <Slide info={this.info}/>
        )}
      </div>
    );
  }
}

export default App;
