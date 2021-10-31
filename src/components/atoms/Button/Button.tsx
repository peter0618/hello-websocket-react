import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5%;
`;
function Button({ title }: any) {
  return <StyledComponent>{title}</StyledComponent>;
}

export default Button;
