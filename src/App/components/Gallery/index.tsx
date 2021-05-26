import React, { MouseEventHandler, useContext, useState } from "react";
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
import { ShowImageModal } from "./components/ShowImageModal";

export const Gallery = () => {
  const [isAddImage, setIsAddImage] = useState(false);
  const [selectedImageObj, setSelectedImageObj] = useState({
    img: "",
    _id: "",
  });
  const { user } = useContext(UserContext);
  const { gallery } = user;

  const clickAddImage = () => {
    setIsAddImage((prevState) => !prevState);
  };

  //TODO think about event type
  const clickImage: MouseEventHandler<HTMLLIElement> = (event: any) => {
    const { id } = event.target;
    const imageIndex = gallery.findIndex(obj => obj._id === id)
    setSelectedImageObj(gallery[imageIndex])
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
                    id={_id}
                    backgroundImage={`data:image/jpg;base64,${img}`}
                    onClick={clickImage}
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
      <ShowImageModal selectedImageObj={selectedImageObj} setSelectedImageObj={setSelectedImageObj} />
    </>
  );
};
