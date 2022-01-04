import { jest } from "@jest/globals";
import SpoonacularService from "../SpoonacularService";
const unmockedFetch = global.fetch;
afterAll(() => {
  global.fetch = unmockedFetch;
  jest.resetAllMocks();
});
let mockedResponse;
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockedResponse),
    })
  );
});
it("should throw error if there is no api key", async () => {
  const service = new SpoonacularService({ onChange: () => {} });
  try {
    await service.findRecipesIdsByIngredients(["orange", "potato"]);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error).toHaveProperty("message", "no api key");
  }
});
it("should return array of recipes ids", async () => {
  mockedResponse = [{ id: "1" }, { id: "245" }, { id: "567" }];
  const service = new SpoonacularService({ onChange: () => {} });
  service.apiKey = "1234";
  const result = await service.findRecipesIdsByIngredients([
    "orange",
    "potato",
  ]);
  expect(result).toEqual(["1", "245", "567"]);
});
it("should return array of objects containing id, instructions, title, image and ingredients", async () => {
  mockedResponse = [
    {
      id: "1",
      title: "serniczek",
      image: "img of serniczek",
      instructions: "zrób serniczek",
      extendedIngredients: [{ name: "ser" }, { name: "jajko" }],
    },
  ];
  const service = new SpoonacularService({ onChange: () => {} });
  service.apiKey = "1234";
  jest
    .spyOn(service, "findRecipesIdsByIngredients")
    .mockImplementationOnce(() => ["1"]);
  const result = await service.findRecipesByIngredients(["ser"]);
  expect(result).toEqual([
    {
      id: "1",
      title: "serniczek",
      image: "img of serniczek",
      description: "zrób serniczek",
      ingredients: ["ser", "jajko"],
    },
  ]);
});
