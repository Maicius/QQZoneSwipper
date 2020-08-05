import React, { Component } from 'react';
import './App.css';
import {
  TIPS1_TIME,
  TIPS2_TIME,
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
    this.info = {
      QQ: "XXXXX",
      nickname: "麦子",
      mood_num: 2000,
      rz_num: 100,
      photo_num: 100,
      friend_num: 1500,
      first_time: "2009-09-26",
      first_friend: "XXX",
      first_friend_time: "2009-12-25",
      years: 11,
      first_friend_header: "src/web/static/image/XXXXX/header/XXXX.jpg",
      like_friend_name: "Test2",
      like_friend_header: "",
      cmt_friend_name_header: "",
      first_mood_time: "2010年05月10日",
      cmt_friend_name: "Test2",
      single_friend: 17,
      most_date: "2015年09月22日",
      most_date_like: 1100,
      most_date_cmt: 122,
      most_time_state: 7.0,
      is_night: 1,
      most_friend: "Test2",
      most_common_friend_num: 160,
      most_group: "Test3",
      most_group_member: 33,
      total_like: 1000,
      total_like_list: [
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
      ],
      total_cmt: 1000,
      total_cmt_people: 100,
      total_like_people: 1000,
      cmt_friend_num: 100,
      cmt_msg_num: 1000,
      like_friend_num: 999,
      non_activate_friend_num: 500,
      "most_group_list": [
        {
          "name": "群名1",
          "value": 400
        },
            {
          "name": "群名2",
          "value": 300
        },
            {
          "name": "群名3",
          "value": 200
        },
            {
          "name": "群名4",
          "value": 100
        },
            {
          "name": "群名5",
          "value": 50
        }
      ],
      total_cmt_list: [
        {
          "name": "Test1",
          "value": "100"
        }, {
          "name": "Test2",
          "value": "96"
        }, {
          "name": "Test3",
          "value": "40"
        }, {
          "name": "Test4",
          "value": "20"
        }, {
          "name": "Test5",
          "value": "10"
        }
      ],
      "my_top_words": [
        {
          "name": "努力",
          "value": 200
        }, {
          "name": "奋斗",
          "value": 180
        }, {
          "name": "Test",
          "value": 60
        }, {
          "name": "我好菜",
          "value": 150
        }
      ],
      "friend_top_words": [
        {
          "name": "大佬",
          "value": 200
        }, {
          "name": "TQL",
          "value": 180
        }, {
          "name": "注意身体",
          "value": 120
        }, {
          "name": "别熬夜",
          "value": 100
        }
      ]
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
