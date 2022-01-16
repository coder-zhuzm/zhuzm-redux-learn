/**
 * author coder-zhuzm
 * date 2022-01-15 22:30
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumIncrementAction, minusNumIncrementAction } from "./reducer";

export default () => {
  const count = useSelector((store: any) => store.num.num);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>hello redux</h1>
      <h2>count: {count}</h2>
      <div>
        <button
          onClick={() => {
            dispatch(addNumIncrementAction(1));
          }}
        >
          add
        </button>
        <br />
        <br />

        <button
          onClick={() => {
            dispatch(minusNumIncrementAction(1));
          }}
        >
          minus
        </button>
      </div>
    </div>
  );
};
