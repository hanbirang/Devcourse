import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsState = {
    modalActive : boolean;
    boardArray : IBoard[];
}

type TAddBoardAction = {
    board: IBoard;
}

type TDeleteListAction = {
    boardId : string;
    listId : string;
}

const initialState : TBoardsState = {
    modalActive : false,
    boardArray : [
        {
            boardId : 'board-0',
            boardName : "첫 번째 게시물",
            lists : [
                {
                    listId : "list-0",
                    listName : "List 1",
                    tasks : [
                        {
                            taskId : "task-0",
                            taskName : "Task 1",
                            taskDescription : "Description",
                            taskOwner : "Hanbirang"
                        },
                        {
                            taskId : "task-1",
                            taskName : "Task 2",
                            taskDescription : "Description",
                            taskOwner : "Hanbirang"
                        }
                    ]
                },
                {
                    listId : "list-1",
                    listName : "List 2",
                    tasks : [
                        {
                            taskId : "task-3",
                            taskName : "Task 3",
                            taskDescription : "Description",
                            taskOwner : "Hanbirang"
                        }
                    ]
                }
            ]
        }
    ]
}

const boardsSlice = createSlice({
    name : 'boards',
    initialState,
    reducers : {
        addBoard: (state, {payload}: PayloadAction<TAddBoardAction>) => {
            state.boardArray.push(payload.board);
        },
        
        deleteList: (state, {payload}: PayloadAction<TDeleteListAction>) => {
            state.boardArray = state.boardArray.map(
                board =>
                board.boardId === payload.boardId
                ?
                {
                    ...board,
                    lists: board.lists.filter(
                        list => list.listId!== payload.listId
                    )
                }
                :
                board
            )
        }
    }
});

export const {addBoard, deleteList} = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
