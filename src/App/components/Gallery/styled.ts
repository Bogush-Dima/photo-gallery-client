import styled from "styled-components";
import {PhotoProps} from "./types";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90vw;
`;

export const PhotosListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
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
  transition: 0.1s ease-in-out;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Empty = styled.div`
  height: 55vh;
  color: #4d9bf270;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
