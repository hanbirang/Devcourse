import React, { FC } from 'react'
import { GrSubtract } from 'react-icons/gr'
import Task from '../Task/Task'
import ActionButton from '../ActionButton/ActionButton'
import { IList } from '../../types'
import { useTypedDispatch } from '../../hooks/redux'
import { deleteList } from '../../store/slices/boardsSlice'
import { addLog } from '../../store/slices/loggerSlice'
import { v4 } from 'uuid'

type TListProps = {
  boardId: string;
  list: IList;
}

const List: FC<TListProps> = ({
  list,
  boardId
}) => {
  const dispatch = useTypedDispatch();

  const handleListDelete = (listId: string) => {
    dispatch(deleteList({boardId, listId}));
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `리스트 삭제하기: ${list.listName}`,
        logAuthor: "User",
        logTimestamp: String(new Date())
      })
    )
  }

  return (
    <div>
      <div>
        <div>{list.listName}</div>
        <GrSubtract 
          onClick={() => handleListDelete(list.listId)}
        />
      </div>
      {list.tasks.map((task, index) => (
        <div
          key={task.taskId}
        >
          <Task 
            taskName={task.taskName}
            taskDescription={task.taskDescription}
            boardId={boardId}
            id={task.taskId}
            index={index}   // drag and drop 기능을 위해 전달
          />
        </div>
      ))}
      <ActionButton />
    </div>
  )
}

export default List
