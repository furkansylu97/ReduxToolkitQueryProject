import React from "react";
import { useAddUserMutation, useFetchUsersQuery } from "../store";
import Skeleton from "@mui/material/Skeleton";
import UsersListItem from "./UsersListItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function UserList() {
  const { data, isError, isFetching } = useFetchUsersQuery();

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <div>Error</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  const [addUser, results] = useAddUserMutation();

  const handleUserAdd = () => {
    addUser();
  };

  return (
    <>
      <div>
        <div className="TopArrangement">
          <h1>Contacts</h1>
          <Button variant="outlined" onClick={handleUserAdd}>
            {results.isLoading ? (
              <CircularProgress />
            ) : (
              <span>Add a Person+</span>
            )}
          </Button>
        </div>
        {content}
      </div>
    </>
  );
}

export default UserList;
