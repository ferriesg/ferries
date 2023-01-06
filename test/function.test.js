import header from "../components/Header/header";

describe("symbol is ok", () => {
  it("+ is ok", () => {
    expect(header(1, 2, "+")).toBe(3);
  });
  it("- is ok", () => {
    expect(header(1, 2, "-")).toBe(-1);
  });
  it("* is ok", () => {
    expect(header(1, 2, "*")).toBe(2);
  });
  it("/ is ok", () => {
    expect(header(1, 2, "/")).toBe(0.5);
  });
});
