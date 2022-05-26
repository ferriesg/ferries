import styled from "styled-components";

export const MainBox = styled.div`
  width: 1440px;
  margin: 20px auto;
  @media (max-width:1440px) {
      width: 100%;
      margin-top: 20px;
  }
`
export const AllBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  height: 1000px;
`;
export const ChildrenBox = styled.div`
  width: 30%;
  border: 1px solid #000;
  padding: 10px 20px;
  margin-right: 20px;
`;

export const ItemBox = styled.div`
    width: 100px;
    height: 40px;
    background-color: green;
    border: 1px solid blue;
`