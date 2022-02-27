import React, { PureComponent } from "react";
import { subAction, decAction } from "../store1/actionCreators";
import { connect } from "../utils/connect";

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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
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
