import React, { PureComponent } from "react";
import { addAction } from "../store1/actionCreators";
import store from "../store1";

export default class Home extends PureComponent {
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
  increment() {
    store.dispatch(addAction(1));
  }
  addNumber(num) {
    store.dispatch(addAction(num));
  }
  componentWillUnmount() {
    this.unSubscribue();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.addNumber(5)}>+5</button>
      </div>
    );
  }
}
