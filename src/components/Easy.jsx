import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };
        case "DECREMENT":
            return { count: state.count - 1, showText: state.showText };
        default:
            return state;
    }
};

const ReducerExp = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <h1>{state.count}</h1>

            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                }}
            >
                Increase
            </button>

            <button
                onClick={() => {
                    dispatch({ type: "DECREMENT" });
                }}
            >
                Decrease
            </button>


        </div>
    );
};

export default ReducerExp;