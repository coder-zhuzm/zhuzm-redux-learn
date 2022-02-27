import React, { PureComponent } from "react";
import {
  incAction,
  addAction,
  changeBannersAction,
  changeRecommendAction,
} from "../store2/actionCreators";

import { connect } from "react-redux";

import axios from "axios";

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      const { banner, recommend } = res.data.data;
      this.props.changeBanners(banner?.list);
      this.props.changeRecommends(recommend?.list);
    });
  }

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
  banners: state.banners,
  recommends: state.recommends,
});
const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(incAction());
  },
  addNumber(number) {
    dispatch(addAction(number));
  },
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendAction(recommends));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
