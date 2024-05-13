import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Clock from './Timer';
import MyWeather from './MyWeather';

function App() {
  return (
    <div className="container">
      <TodoList />
      <Clock />
      <MyWeather weather='맑음'/>
    </div>
  );
}

export default App;
