import styled from "styled-components";
import { Props } from "./types";

export const Wrapper = styled.div`
  background: gray;
`;

export const Image = styled.div`
  background-image: ${({ image }: Props) => image};
`;
