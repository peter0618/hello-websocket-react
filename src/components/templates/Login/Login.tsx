import { Button, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
  width: 350px;
  margin: auto;
  margin-top: 32px;
  > * {
    background: white;
    padding: 20px 40px;
    border: 1px solid #dbdbdb;
    margin-bottom: 10px;
  }
  img {
    max-width: 100%;
    height: 50px;
  }
  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .action-wrapper {
    display: flex;
    flex-direction: column;
    > * {
      margin-bottom: 5px;
    }
  }
`;
function Login(): JSX.Element {
  return (
    <StyledLogin>
      <div>
        <div className="image-wrapper">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="action-wrapper">
          <Input placeholder="사용자 이메일" />
          <Input placeholder="비밀번호" />
          <Button type="primary" block>
            로그인
          </Button>
        </div>
      </div>

      <div>
        계정이 없으신가요?
        <span>가입하기</span>
      </div>
    </StyledLogin>
  );
}

export default Login;
