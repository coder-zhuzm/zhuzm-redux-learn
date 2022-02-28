import React, { PureComponent } from "react";
import { subAction, decAction } from "../store5/actionCreators";
import { connect } from "react-redux";

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About2</h2>
        <h2>当前计数:{this.props.counter}</h2>
        <button
          onClick={(e) => {
            this.props.decrement();
          }}
        >
          -1
        </button>
        <button
          onClick={(e) => {
            this.props.subNumber(5);
          }}
        >
          -5
        </button>
        <div>
          <h1>Banner</h1>
          <ul>
            {this.props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>;
            })}
          </ul>
          <h1>Recommend</h1>
          <ul>
            {this.props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends,
});
const mapDispatchToProps = (dispatch) => ({
  decrement() {
    dispatch(decAction());
  },
  subNumber(number) {
    dispatch(subAction(number));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(About);
