import React, { Component } from 'react';
import './App.css';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  ACCESS_TOKEN,
  USERNAME,
  AVATAR,
  PROXY,
  STATUS,
  OWNER,
  REPO,
  OTHER,
  INFO,
  BG1,
  BG2,
  WECHAT,
  MUSIC,
  TIPS1_TIME,
  TIPS2_TIME,
  PER_PAGE,
  ISSUE_NUM,
  YEAR_2018,
  YEAR_2019,
} from './utils/constant';

import Alert from 'antd/lib/alert';
import Button from 'antd/lib/button';
import Spin from 'antd/lib/spin';
import { ReactComponent as GitHub } from './icon/githubWhite.svg';
import Slide from './components/Slide';

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
    this.repos = {};
    this.info = {
      eventNums: 244,
      addLines: 20010,
      deleteLines: 20010,
      totalLines: 40020,
      likeWeekType: {
        name: '周末',
        count: 52
      },
      weekendNums: 52,
      weekdayNums: 31,
      issueNums: 234, // 包括创建，指派，提及和订阅的问题
      starNums: 56, // 创建star的数量
      forget: {
        language: 'PHP',
        date: '2019-01-01T11:22:00Z'
      },
      languageLastCommit: {
        'Java': '2019-03-05T01:29:00Z',
        'PHP': '2019-01-01T11:22:00Z',
      },
      likePeriod: {
        name: 'afternoon',
        count: 30
      },
      period: {
        morningNums: 15,
        afternoonNums: 30,
        eveningNums: 16,
        dawnNums: 5
      },
      mostDay: {
        count: 6,
        repo: 'test'
      },
      latestDay: {
        date: '2019-03-05T01:29',
        repo: 'test'
      },
      specialDay: {
        date: '2019-03-05T01:29:00Z',
        repo: 'test',
        count: 3
      },
      commitNums: 231,
      repoNums: 20,
      languageNums: 8,
      mostLanguage: {
        name: 'JavaScript',
        repoNums: 3,
        commitNums: 65
      },
      language: {
        Java: 2,
        JavaScript: 3
    
      }
    }
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

  render() {
    return (
      <div className="App">
        <Slide info={this.info}/>
      </div>
    );
  }
}

export default App;
