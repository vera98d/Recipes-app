import { jest } from "@jest/globals";

import Store from "../store";

it("should set initial state", () => {
  const initialState = { foo: 123, bar: "baz" };
  const s = new Store(initialState);
  expect(s.state).toEqual(initialState);
});

it("should allow to register single listener", () => {
  const s = new Store({});
  const fn = () => {};
  s.onChange(fn);
  expect(s.eventListeners).toContain(fn);
});

it("should allow to register multiple listeners", () => {
  const s = new Store({});
  const fn1 = () => {};
  const fn2 = () => {};
  s.onChange(fn1);
  s.onChange(fn2);
  expect(s.eventListeners).toEqual(expect.arrayContaining([fn1, fn2]));
});

it("should dispatch action which modifies state and notifies listeners", () => {
  const initialState = { foo: 123 };
  const s = new Store(initialState);
  const action = jest.fn().mockImplementation(({ foo, ...restOfProps }) => ({
    ...restOfProps,
    foo: foo * 2,
  }));
  const listener = jest.fn();

  s.onChange(listener);
  s.dispatch(action);

  expect(s.state).toEqual({ foo: 246 });
  expect(action).toHaveBeenCalledTimes(1);
  expect(action).toHaveBeenCalledWith(initialState);
  expect(listener).toHaveBeenCalledTimes(1);
  expect(listener).toHaveBeenCalledWith({ foo: 246 });
});
