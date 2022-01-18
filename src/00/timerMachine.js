export const timerMachineConfig = {
  initialState: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE: 'running'
      }
    },
    paused: {
      on: {
        TOGGLE: 'running',
        RESET: 'idle'
      }
    },
    running: {
      on: {
        TOGGLE: 'paused'
      }
    }
  }
};

export const timerMachine = (state, event) => {
  console.log(state, event);
  return timerMachineConfig.states[state]?.on?.[event.type] || state;
};
