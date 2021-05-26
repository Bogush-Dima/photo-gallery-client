import styled from "styled-components";
import {PhotoProps} from "./types";

export const MainWrapper = styled.div`
  margin: 2rem auto 0;
  max-width: 90vw;
`;

export const PhotosListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const PhotosList = styled.ul`
  background: #e6f2ff;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Photo = styled.li<PhotoProps>`
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  height: 15rem;
  width: 15rem;
  border: 2px solid #cce4ff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

export const Empty = styled.div`
  height: 80vh;
  color: #4d9bf270;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
