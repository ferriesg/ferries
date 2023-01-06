import {
  asyncFuncion,
  promiseFuncion,
} from "../components/Header/asyncFunction";

test("test async function", async () => {
  const aa = await asyncFuncion("test");
  expect(aa).toBe("test");
});
test("test Promise function", () => {
  return promiseFuncion(1, 1).then((data) => {
    expect(data).toBeTruthy();
  });
});

test("test Promise reject function", () => {
  expect(promiseFuncion(1, 2)).rejects.toBeFalsy();
});
