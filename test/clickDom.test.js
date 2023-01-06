import enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import clickDom from "../components/Header/clickDom";
import jsdom from "jsdom";
enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const { window } = new JSDOM("");
const { document } = new JSDOM(``).window;
global.document = document;
global.window = window;

test("click dom test", () => {
  const currentDom = enzyme.mount(<clickDom />);
  // console.log(currentDom.debug());
  expect(currentDom.debug()).toMatchSnapshot();
  // console.log(expect(currentDom.exists(".button")));
  // const buttonEle = currentDom.getByRole("button",{ name: 'on' });
  // console.log(buttonEle);
  // fireEvent.click(currentDom.getByText(/on/i));
  // console.log(currentDom.debug());
});
