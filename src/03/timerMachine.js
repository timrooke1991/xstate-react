import { createMachine, assign } from 'xstate';

// Parameterize the assign actions here:
const tick = assign({
  duration: (ctx) => ctx.duration - 1,
});

const addMinute = assign({
  duration: (ctx) => ctx.duration + 60,
});

const reset = assign({
  duration: 60,
  elapsed: 0,
});

export const timerMachine = createMachine({
  initial: 'idle',
  context: {
    duration: 60,
    elapsed: 0,
    interval: 0.1,
  },
  states: {
    idle: {
      // Parameterize this action:
      entry: reset,
      on: {
        TOGGLE: 'running',
      },
    },
    running: {
      on: {
        TICK: {
          actions: tick
        },
        TOGGLE: 'paused',
        ADD_MINUTE: {
          actions: addMinute
        },
      },
    },
    paused: {
      on: {
        TOGGLE: 'running',
        RESET: 'idle',
      },
    },
  }
});
