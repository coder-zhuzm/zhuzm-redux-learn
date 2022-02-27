## Redux基础--手动触发dispatch

- 手动触发dispatch
- 手动获取store state

> 遇到问题

```js
//在 reducer中默认返回值中忽略了默认的state，导致constructor 过程中获取不到默认的 state
  default:
      return state;
```