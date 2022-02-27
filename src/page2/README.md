## Redux-- 调用自己封装的connect 高阶函数组件

- 封装一个HOC High Order Component 高阶函数组件
- 使用` React.createContext()`  创建context 从而实现全局数据共享
- 组件调用 connect 函数 （涉及柯里化） connect函数在组件的props中存入 需要的state 以及 dispatch方法


- 涉及到了 跨组件通信中的context 
- 在使用mapStateToProps 中 有些许迷惑，其实就是 函数传过去，connect 调用该方法 再使用 props 传值的方式将 结果解构 从而 在组件中获取需要的值

