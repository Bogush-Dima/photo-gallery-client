import React, { useContext, useState } from "react";
import { Title, Button } from "../../main-styled-components";
import {
  MainWrapper,
  PhotosListWrapper,
  PhotosList,
  Photo,
  Empty,
} from "./styled";
import { UserContext } from "../../../utils/contexts/user";
import { AddImageModal } from "./components/AddImageModal";
import { Header } from "../Header";

export const Gallery = () => {
  const [isAddImage, setIsAddImage] = useState(false);
  const { user } = useContext(UserContext);
  const { gallery } = user;
  console.log(gallery);

  const clickAddImage = () => {
    setIsAddImage((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <MainWrapper>
        <Title>Gallery</Title>
        <Button onClick={clickAddImage}>Add Image</Button>
        <PhotosListWrapper>
          {gallery.length ? (
            <PhotosList>
              {gallery.map(({ _id, img }) => {
                return (
                  <Photo
                    key={_id}
                    backgroundImage={`data:image/jpg;base64,${img}`}
                  />
                );
              })}
            </PhotosList>
          ) : (
            <Empty>Empty Gallery</Empty>
          )}
        </PhotosListWrapper>
      </MainWrapper>
      <AddImageModal isAddImage={isAddImage} setIsAddImage={setIsAddImage} />
    </>
  );
};
