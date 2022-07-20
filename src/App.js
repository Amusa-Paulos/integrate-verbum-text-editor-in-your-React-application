import React from 'react'
import logo from './logo.svg';
import './App.css';
import NoteViewer from './VerbumTextEditor'
import Show from './Show';


function App() {
  const [content, setContent] = React.useState('')
  
  return (
    <div>
      <NoteViewer setContent={setContent} />
      <Show content={content} />
    </div>
  );
}

export default App;
