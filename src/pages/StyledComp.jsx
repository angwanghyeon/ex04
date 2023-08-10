import React from 'react';
import { styled } from 'styled-components';

const SimButton = styled.button`
  color: white;
  background-color: green;  
`;
const LargeButton = styled(SimButton)`
  font-size: 50px
`;
const ReactButton = props => {
  console.log(props);
  return <button className={props.className}>{props.children}</button>
}
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px
`;
const PrimaryButton = styled.button`
    color : ${props => props.$primary ? 'red' : 'blue'};
    background-color: ${props => props.$primary ? 'white' : 'gray'}
`;


const StyledComp = () => {
  return (
    <div>
      <SimButton>Simple</SimButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React button</ReactButton>
      <ReactLargeButton>React Large button</ReactLargeButton>
      <PrimaryButton >Normal</PrimaryButton>
      {/* 이게 지금 primary가 불린타입이 아닌데 자꾸 불린으로 주려고 하니까 오류나는거라 */}
      <PrimaryButton $primary>Normal</PrimaryButton>
    </div>
  );
};

export default StyledComp;