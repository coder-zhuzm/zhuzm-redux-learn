import React, { PureComponent } from "react";
import { incAction, addAction } from "../store1/actionCreators";
import { connect } from "../utils/connect";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home2</h2>
        <h2>当前计数:{this.props.counter}</h2>
        <button
          onClick={(e) => {
            this.props.increment();
          }}
        >
          +1
        </button>
        <button
          onClick={(e) => {
            this.props.addNumber(5);
          }}
        >
          +5
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});
const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(incAction());
  },
  addNumber(number) {
    dispatch(addAction(number));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
