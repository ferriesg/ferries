import styled from "styled-components";

export const AllBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const SignUpBox = styled.div`
  background-color: #21fff22e;
  width: 600px;
  padding: 40px 100px;
  position: relative;
  @media (max-width: 640px) {
    width: 80vw;
  }
`;

export const RegistereBox = styled.span`
  position: absolute;
  bottom: 0px;
  right: 10px;
  cursor: pointer;
  :hover {
    color: #be0f0f;
    text-decoration: underline;
  }
`;
