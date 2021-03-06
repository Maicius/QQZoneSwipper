import React, { Component } from 'react';
import { queryParse } from '../utils/helper';
import './Slide.css';
import './Page1.css';

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: false,
      text: "立即<br/>查看"
    };
    const query = queryParse();
    this.state.username = query.username
  }
  componentDidMount() {
    this.timer = setTimeout(
      () => {
        this.setState({arrow:true})
      },
      6000
    );
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <div>

          <div className="bg-back">
            <div className="bg-white"/>
            <div className="title-wrapper">
              <h1 className="title title-1"/>
              <h1 className="title title-2"/>
            </div>
              <div className="nickname">{this.props.info.nickname}</div>
                  <a className="button" onClick={this.props.handleClick}> <span dangerouslySetInnerHTML={{__html: this.state.text}}></span></a>
              <div className="card"></div>
          </div>
      </div>
    );
  }
}

export default Page1;
