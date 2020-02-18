import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Questionnaire from './components/Questionnaire';

const questions = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Questionnaire {...{questions}} />
      </header>
    </div>
  );
}

export default App;
