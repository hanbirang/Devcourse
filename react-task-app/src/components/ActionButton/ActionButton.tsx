import React, { FC, useState } from 'react'
import DropDownForm from './DropDownForm/DropDownForm';
import { IoIosAdd } from 'react-icons/io';

type TActionButtonProps = {
  boardId: string,
  listId: string,
  list?: boolean,
}

const ActionButton : FC<TActionButtonProps> = (
  boardId,
  listId,
  list
) => {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const buttonText = list? "새로운 리스트 등록" : "새로운 일 등록";
  
  return isFormOpen ? (
    <DropDownForm 
      setIsFormOpen = {setIsFormOpen}
      list = {list ? true : false}
      boardId = {boardId}
      listId = {listId}
    />
  )
    :
    (
      <div>
        <IoIosAdd />
        <p>{buttonText}</p>
      </div>
    )
}

export default ActionButton
