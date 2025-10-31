import React from 'react';
import List from "./List";

function App() {
  return (
    <div id="app">
      <List target='todos' />
      <List target='weeklyTodos' />
      <List target='monthlyTodos' />
    </div>
  );
}

export default App;
