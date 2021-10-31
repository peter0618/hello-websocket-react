import React from 'react';
import './App.css';
import styled from 'styled-components';
import Login from './components/templates/Login/Login';

const StyledComponent = styled.div`
  // background: #fafafa;
`;
function App() {
  return (
    <StyledComponent>
      <Login />
    </StyledComponent>
  );
}

export default App;
