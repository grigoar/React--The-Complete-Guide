import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //   console.log(props.images);
  //   const images = props.images.map((image) => {
  const images = props.images.map((image) => {
    // return <img alt={description} key={id} src={urls.regular} />;
    return <ImageCard key={image.id} image={image} />;
    // return <img alt={image.description} key={image.id} src={image.urls.regular} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

//Challenge
// const usersList = this.users.map((user) => {
//   return <li key={user.id}>{user.name}</li>;
// });
// return <ul>{usersList}</ul>;
