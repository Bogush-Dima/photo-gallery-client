import React from "react";
import { Title } from "../../main-styled-components";
import { MainWrapper, PhotosListWrapper, PhotosList, Photo } from "./styled";

export const Gallery = () => {
  return (
    <MainWrapper>
      <Title>Gallery</Title>
        <PhotosListWrapper>
        <PhotosList>
            <Photo>Photo</Photo>
            <Photo>Photo</Photo>
            <Photo>Photo</Photo>
            <Photo>Photo</Photo>
            <Photo>Photo</Photo>
            <Photo>Photo</Photo>
        </PhotosList>
        </PhotosListWrapper>
    </MainWrapper>
  );
};
