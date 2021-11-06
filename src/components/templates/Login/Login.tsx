import { Button, Input } from 'antd';
import React, { useReducer, useState } from 'react';
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

function reducer(state: number, action: { type: any }) {
  switch (action.type) {
    case 'AUTH.LOGIN':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
function Login(): JSX.Element {
  const [number, dispatch] = useReducer(reducer, 0);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  function login() {
    alert(`${userEmail}/${userPassword}`);
    const uri = 'http://peterchat.duckdns.org/auth/login';
  }

  return (
    <StyledLogin>
      <div>
        <div className="image-wrapper">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="action-wrapper">
          <Input onChange={e => setUserEmail(e.target.value)} placeholder="사용자 이메일" />
          <Input onChange={e => setUserPassword(e.target.value)} placeholder="비밀번호" type="password" />
          <Button type="primary" block onClick={() => login()}>
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
