import styled from "styled-components";
import { ImageProps } from "./types";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(44 44 44 / 91%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.div`
  height: 65vh;
  width: 58%;
  margin-bottom: 3rem;
  background-image: ${({ img }: ImageProps) => `url(${img})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
