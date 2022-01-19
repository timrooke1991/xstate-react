import { createMachine } from 'xstate';

// Use the machine you created in Exercise 00
// export const timerMachine = // ...

export const timerMachine = createMachine({
  initial: 'idle',
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
});
