import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed'
  },
  {
    id: 'cato',
    name: 'Littld Cato'
  },
  {
    id: 'kvn',
    name: 'KVN'
  }
]

function App() {
  const [characters, setCharacters] = useState(finalSpaceCharacters);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext>
          <Droppable droppableId='characters'>
            {(provided) => (
              <ul
                className='characters'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {
                  characters.map(({id, name}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li 
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>
                              {name}
                            </p>
                          </li>
                        )}
                      </Draggable>
                    )
                  })
                }
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
