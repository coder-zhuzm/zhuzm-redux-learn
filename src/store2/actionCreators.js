import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA,
} from "./constants.js";

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num
});
export const subAction = (num) => ({
  type: SUB_NUMBER,
  num
});
export const incAction = () => ({
  type: INCREMENT,
});
export const decAction = () => ({
  type: DECREMENT,
});

// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
});

export const changeRecommendAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
});
