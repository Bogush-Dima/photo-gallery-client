import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  from{
    transform: scale(1);
    opacity: 1;
  }
  to{
    transform: scale(2);
    opacity: 0;
  }
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #1a181bb8;
  display: grid;
  place-items: center;
`;

export const Container = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background-color: #95c7ff;

  &:after {
    content: "";
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #95c7ff;
    z-index: 1;
    position: absolute;
    animation: ${pulse} 1s ease infinite;
  }
`;
