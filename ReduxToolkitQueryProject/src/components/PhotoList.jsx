import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import PhotoListItem from "./PhotoListItem";

function PhotoList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px" }} />
    );
  } else if (isError) {
    content = <div>Error</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  const [addPhoto, results] = useAddPhotoMutation();

  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  return (
    <>
      <div>
        <div className="TopArrangement">
          <h3>{album.title}'s Photos</h3>
          <Button variant="outlined" onClick={handlePhotoAdd}>
            {results.isLoading ? (
              <CircularProgress />
            ) : (
              <span>Add a Photo+</span>
            )}
          </Button>
        </div>
      </div>
      <div className="photoWrapper">{content}</div>
    </>
  );
}

export default PhotoList;
