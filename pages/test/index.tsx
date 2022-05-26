import { useState } from "react";
import { MainBox, AllBox, ChildrenBox, ItemBox } from "./index.style";
function Test() {
  const [toDoData, setToDoData] = useState([]);
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
            {toDoData.map((item) => {
              return <ItemBox>aaa</ItemBox>;
            })}
          </ChildrenBox>
          <ChildrenBox>
            {finishData.map((item) => {
              return <ItemBox>aaa</ItemBox>;
            })}
          </ChildrenBox>
          <ChildrenBox>
            {inProgressData.map((item) => {
              return <ItemBox>aaa</ItemBox>;
            })}
          </ChildrenBox>
        </AllBox>
      </MainBox>
    </>
  );
}

export default Test;
