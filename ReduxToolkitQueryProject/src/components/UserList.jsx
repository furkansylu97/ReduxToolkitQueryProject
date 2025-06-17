import React from "react";
import { useFetchUsersQuery } from "../store";
import Skeleton from "@mui/material/Skeleton";

function UserList() {
  const { data, isError, isFetching } = useFetchUsersQuery();

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  }

  return <div>{content}</div>;
}

export default UserList;
