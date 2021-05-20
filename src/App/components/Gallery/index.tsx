import React, { useState } from "react";
import { Title } from "../../main-styled-components";
import { MainWrapper, PhotosListWrapper, PhotosList, Photo } from "./styled";
import axios from "axios";
import { SERVER } from "../../constants/paths";

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const getImages = () => {
    axios
      .get(`${SERVER}/getImages`)
      .then((res) => setImages(res.data.data.data))
      .catch((err) => console.log(err));
  };

  let d = ''


  if (images) {
      // @ts-ignore
      const a = Buffer.from(images)
      d = a.toString('base64').replace(/(.)(.)/g, '$1$2 ')
  }

  return (
    <MainWrapper>
      <Title>Gallery</Title>
      <PhotosListWrapper>
        <PhotosList>
            <img src={d} alt='test' />
          <Photo>Photo</Photo>
          <Photo>Photo</Photo>
          <Photo>Photo</Photo>
          <Photo>Photo</Photo>
          <Photo>Photo</Photo>
          <Photo>Photo</Photo>
        </PhotosList>
      </PhotosListWrapper>
      <button onClick={getImages}>GET IMAGES</button>
    </MainWrapper>
  );
};
