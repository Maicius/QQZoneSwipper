import React, { Component } from 'react';
import { ReactComponent as GitHub } from '../icon/github.svg';
import Typer from './Typer';
import { queryParse } from '../utils/helper';
import './Slide.css';
import './Page1.css';

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrow: false,
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
        {this.props.page === 1 ? (
          <div className="page1">
            <p className="mb5 username">
              <GitHub className="github" />
              <span className="stress">{this.state.username}</span>
            </p>
            <div className="typer">
              <Typer
                strings={[
                  "<strong>$</strong> git add .^1000\n<strong>$</strong> git commit -m 'get report'^1000\n<strong>$</strong> git push",
                ]}
              />
            </div>
            {this.state.arrow ? (
            <div className="arr"><i></i></div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Page1;
