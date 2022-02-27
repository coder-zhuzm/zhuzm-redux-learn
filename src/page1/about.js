import React, { PureComponent } from "react";
import store from "../store1";
import { subAction } from "../store1/actionCreators";

export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    this.unSubscribue = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  descement() {
    store.dispatch(subAction(1));
  }
  subNumber(num) {
    store.dispatch(subAction(num));
  }
  componentWillUnmount() {
    this.unSubscribue();
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={(e) => this.descement()}>-1</button>
        <button onClick={(e) => this.subNumber(5)}>-5</button>
      </div>
    );
  }
}
