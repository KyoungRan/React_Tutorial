//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
import React, {Component} from 'react';

class StickyStyle extends Component {
  constructor() {
    super();
    this.state = {
      top: null,
      stick: false
    };
    this.scrollListener = this.scrollListener.bind(this);
  }
  renderSecondNavbar() {
    <div>
      SecondNavbar
    </div>
  }
  scrollListener(e) {
    const {stick} = this.state;
    const top = this.state.top || document.body.scrollTop + this._ele.getBoundingClientRect().top - 70;
    const scrollTop = document.body.scrollTop;
    if (top && top < scrollTop && !stick) {
      this.setState({
        top,
        stick: true
      });
    } else if (top && top > scrollTop && stick) {
      this.setState({
        ...this.state,
        stick: false
      });
    }
  }
  componentDidMount() {
    this.setState({})
    document.addEventListener('scroll', this.scrollListener);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const StickyElement = this.props.stickyElement;
    return <div ref={ele => this._ele = ele} className={`${this.props.className} ${this.state.stick && this.props.stickyClass || ''}`} >
      {StickyElement && (
        <StickyElement/>
      )}
      {this.props.children}
    </div>
  }
};

export default StickyStyle;
