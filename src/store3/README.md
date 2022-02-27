## 说明

> page 1 2 使用该 store 唯一不同 2 在 入口文件中 引入 store 及 使用 context 将 store 中的值进行传递



```js
//page1 配套使用的 index 文件
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
```



```js
//page2 配套使用的 index 文件
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { StoreContext } from "./utils/context";
import store from "./store1";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  rootElement
);
```
