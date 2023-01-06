import NewDomTest from "../components/Header/newDomTest";
import enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import jsdom from "jsdom";
enzyme.configure({ adapter: new Adapter() });
const { JSDOM } = jsdom;
if (typeof document === "undefined") {
  const dom = new JSDOM(
    "<!doctype html><html><head></head><body></body></html>"
  );
  global.window = dom.window;
  global.document = global.window.document;
  global.navigator = global.window.navigator;
}

describe("Test new Dom render", () => {
  it("find Dom Element is True", () => {
    const currentDom = enzyme.mount(<NewDomTest />);
    console.log(currentDom.debug());
  });
});
