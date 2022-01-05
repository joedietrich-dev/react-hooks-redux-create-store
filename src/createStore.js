"use strict";

function createStore(reducer = (f) => f) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  const getState = () => state;

  return { getState, dispatch };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

const { getState, dispatch } = createStore(reducer);

function render() {
  let container = document.getElementById("container");
  container.textContent = getState().count;
}

dispatch({ type: "@@INIT" });
let button = document.getElementById("button");

button.addEventListener("click", function () {
  dispatch({ type: "counter/increment" });
});
