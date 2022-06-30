import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { AllBox, RegistereBox, SignUpBox } from "../../components/Styled/admin.styles";

const Admin: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  function completeOperation(){
    if(isLogIn){
      console.log(111);
    }else{
      console.log(2222);
    }
  }
  return (
    <AllBox>
      <SignUpBox>
        {isLogIn ? (
          <>
            <Input
              size="large"
              placeholder="Email"
              prefix={<UserOutlined />}
              style={{ marginBottom: "40px" }}
            />
            <Input
              size="large"
              placeholder="PassWord"
              type="password"
              prefix={<QuestionCircleOutlined />}
            />
          </>
        ) : (
          <>
            <Input
              size="large"
              placeholder="UserName"
              prefix={<UserOutlined />}
              style={{ marginBottom: "20px" }}
            />
            <Input
              size="large"
              placeholder="Email"
              prefix={<UserOutlined />}
              style={{ marginBottom: "20px" }}
            />
            <Input
              size="large"
              placeholder="PassWord"
              type="password"
              prefix={<QuestionCircleOutlined />}
              style={{ marginBottom: "20px" }}
            />
            <Input
              size="large"
              placeholder="Reconfirm password"
              type="password"
              prefix={<QuestionCircleOutlined />}
            />
          </>
        )}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            shape="round"
            size="large"
            ghost={true}
            style={{ width: "50%" }}
            onClick={()=>completeOperation()}
          >
            {isLogIn ? "Log In" : "Registered"}
          </Button>
          <RegistereBox
            onClick={() => {
              setIsLogIn(!isLogIn);
            }}
          >
            {isLogIn ? "No account? Please register" : "Now log in"}
          </RegistereBox>
        </div>
      </SignUpBox>
    </AllBox>
  );
};

export default Admin;
