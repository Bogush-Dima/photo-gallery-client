import styled from "styled-components";

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

export const Photo = styled.li`
  background: yellow;
  height: 15rem;
  width: 15rem;
  border: 2px solid #cce4ff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;