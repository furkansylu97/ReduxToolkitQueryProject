import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { GoTrash } from "react-icons/go";
import { useRemoveUserMutation } from "../store";
import CircularProgress from "@mui/material/CircularProgress";

function UsersListItem({ user }) {
  const [removeUser, results] = useRemoveUserMutation();

  const handleClick = () => {
    removeUser(user);
  };

  const header = (
    <>
      <button
        style={{ marginRight: "20px", border: "none", cursor: "pointer" }}
        onClick={handleClick}
      >
        {results.isLoading ? <CircularProgress style={{ width: "20px", height: "20px" }}/> : <GoTrash />}
      </button>
      {user.name}
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
}

export default UsersListItem;
