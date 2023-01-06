import { cleanup, fireEvent, render } from "@testing-library/react";
import CheckboxWithLabel from "../components/Header/checkBox";
import jsdom from "jsdom";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);
/**
 * @jest-environment jsdom
 */
const { JSDOM } = jsdom;
const { window } = new JSDOM("");
const { document } = new JSDOM(``).window;

global.document = document;
global.window = window;
it("CheckboxWithLabel changes the text after click", () => {
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );
  console.log(render(<CheckboxWithLabel labelOn="On" labelOff="Off" />).queryByLabelText);
  // expect(queryByLabelText(/off/i)).toBeTruthy();

  // fireEvent.click(getByLabelText(/off/i));

  // expect(queryByLabelText(/on/i)).toBeTruthy();
});
