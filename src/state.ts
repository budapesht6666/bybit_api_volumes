export type State = {
  value1: number;
  value2: number;
  value3: number;
};

const state: State = { value1: 0, value2: 0, value3: 0 };

export const getState = () => state;

export const setState = (newState: Partial<State>) => ({ ...state, ...newState });
