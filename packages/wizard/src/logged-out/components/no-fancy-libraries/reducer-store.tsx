import React, { Dispatch } from "react";

type InputState = {
  value: string;
};

type InputAction = {
  type: "UPDATE" | "ROLLBACK" | "INIT";
  payload: string;
};

export function inputReducer(state: InputState, action: InputAction): InputState {

  console.log("===> Reducer: ", state, action);

  return {
    value: action.payload,
  };
}

interface InitContextProps {
  state: InputState;
  dispatch: Dispatch<InputAction>;
}

export const InputContext = React.createContext({} as InitContextProps);




