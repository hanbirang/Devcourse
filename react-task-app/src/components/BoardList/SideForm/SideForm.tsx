import React, { ChangeEvent, FC, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { icon, input, sideForm } from './SideForm.css';
import { useTypedDispatch } from '../../../hooks/redux';
import { addBoard } from '../../../store/slices/boardsSlice';
import { v4 as uuidv4 } from 'uuid';

type TSideFormProps = {
  inputRef : React.RefObject<HTMLInputElement>;
  setIsFormOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const SideForm :FC<TSideFormProps> = ({
  setIsFormOpen,
  inputRef
}) => {
  const [inputText, setInputText] = useState('');
  const dispatch = useTypedDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const handleOnBlur = () => {
    setIsFormOpen(false);
  }

  const handleClick = () => {
    if (inputText) {
      dispatch(
        addBoard({
          board: {
            boardId: uuidv4(), 
            boardName: inputText,
            lists: []
          }
        })
      )
    }
  }

  return (
    <div className={sideForm}>
      <input 
        // ref = {inputRef}
        autoFocus
        className={input}
        type='text'
        placeholder='새로운 게시판 등록하기'
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={icon} onClick={handleClick}/>
    </div>
  )
}

export default SideForm
