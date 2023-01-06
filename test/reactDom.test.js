import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Admin from "../pages/admin/index";
import jsdom from "jsdom";
import renderer from "react-test-renderer";

// const { JSDOM } = jsdom;
// const { window } = new JSDOM("");
// const { document } = new JSDOM(``).window;


// global.document = document;
// global.window = window;

const { JSDOM } = jsdom;
if (typeof document === 'undefined') {
    const dom=new JSDOM('<!doctype html><html><head></head><body></body></html>');
    global.window =dom.window;
    global.document = global.window.document;
    global.navigator = global.window.navigator;
}

Enzyme.configure({ adapter: new Adapter() });

describe("test new Dom", () => {
  it("go to snapshot", () => {
    const tree = renderer.create(<Admin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Enzyme shallow dom", () => {
    const warpper = Enzyme.shallow(<Admin />);
    expect(warpper.debug()).toMatchSnapshot();
  });
  it("Enzyme mount dom", () => {
    // sinon.spy(Admin.prototype, 'componentDidMount');
    const mountWarpper = mount(<Admin />);
    console.log(mountWarpper, 2);
  });
  it("Enzyme render dom ", () => {
    const renderWarpper = Enzyme.render(<Admin />);
    expect(renderWarpper).toMatchSnapshot();
  });
});
