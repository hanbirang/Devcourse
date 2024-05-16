import React, { FC } from 'react'
import { IList } from '../../types';
import List from '../List/List';
import ActionButton from '../ActionButton/ActionButton';

type TListsContainerProps = {
  boardId: string;
  lists: IList[];
}

const ListsContainer : FC<TListsContainerProps> = ({
  lists,
  boardId
}) => {
  return (
    <div>
      {
        lists.map(list => (
          <List 
            key={list.listId} 
            list={list}
            boardId={boardId}
          />
        ))
      }
      <ActionButton />
    </div>
  )
}

export default ListsContainer
