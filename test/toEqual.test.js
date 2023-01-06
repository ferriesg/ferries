import toequal from "../components/Header/toquire";

describe("judge arr && obj is true", () => {
  it("obj is true", () => {
    expect(toequal("object")).toEqual(expect.objectContaining({}));
  });
  it("arr is true", () => {
    expect(toequal("array")).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
