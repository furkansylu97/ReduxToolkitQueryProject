import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList'

function UsersListItem({user}) {
  return (
    <div>
      <ExpandablePanel>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  )
}

export default UsersListItem