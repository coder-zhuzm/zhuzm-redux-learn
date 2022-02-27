## Redux - 调用 react-redux 中提供的 connect

- 调用 `react-redux` 中提供的 `connect`
- 使用 `react-redux` 中的 `Provider` 进行`store`数据传递
- 引入 `axios` 异步或区域数据
## index 入口文件

```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store2";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
```
