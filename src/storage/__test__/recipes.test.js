import { jest } from "@jest/globals";
import RecipesStorage from "../recipes";

let mockStorage = {};

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    mockStorage[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => mockStorage[key]);
});

beforeEach(() => {
  mockStorage = {};
});

afterAll(() => {
  global.Storage.prototype.setItem.mockReset();
  global.Storage.prototype.getItem.mockReset();
});

it('should call Storage.setItem function once with argument "recipes", "{"foo":"bar"}"', () => {
  const data = { foo: "bar" };
  const s = new RecipesStorage();
  s.save(data);

  expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
  expect(global.Storage.prototype.setItem).toHaveBeenCalledWith(
    "recipes",
    '{"foo":"bar"}'
  );
});

it('should all Storage.getItem function once with argument "recipes"', () => {
  const data = { foo: "bar" };
  const s = new RecipesStorage();
  s.save(data);

  const savedData = s.load();

  expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);
  expect(global.Storage.prototype.getItem).toHaveBeenCalledWith("recipes");
  expect(savedData).toEqual(data);
});

it("should call onChange function with a function as an argument", () => {
  const store = {
    onChange: jest.fn(),
  };

  const s = new RecipesStorage();

  s.plugInStore(store);

  expect(store.onChange).toHaveBeenCalledTimes(1);
  expect(store.onChange).toHaveBeenCalledWith(expect.any(Function));
});
