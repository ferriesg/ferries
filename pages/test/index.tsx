import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { MainBox, AllBox, ChildrenBox, ItemBox } from "./index.style";
function Test() {
  const [toDoData, setToDoData] = useState([] as any);
  const [finishData, setFinishData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [inputData, setInputData] = useState("");
  return (
    <>
      <MainBox>
        add new Todo
        <input
          value={inputData}
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setToDoData([...toDoData, inputData]);
            setInputData("");
          }}
        >
          Add
        </button>
        <AllBox>
          <ChildrenBox>
            {toDoData.map((item: string, index: Key | null | undefined) => {
              return <ItemBox key={index}>{item}</ItemBox>;
            })}
          </ChildrenBox>
          <ChildrenBox>
            {finishData.map((item, index) => {
              return <ItemBox key={index}>{item}</ItemBox>;
            })}
          </ChildrenBox>
          <ChildrenBox>
            {inProgressData.map((item, index) => {
              return <ItemBox key={index}>{item}</ItemBox>;
            })}
          </ChildrenBox>
        </AllBox>
      </MainBox>
    </>
  );
}

export default Test;
