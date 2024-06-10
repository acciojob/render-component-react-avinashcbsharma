import '../styles/App.css';
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('The p tag has been rendered.');
  }, []);
  return (
    <div>
      <h1>React Learning</h1>
      <p> I am learning React. My life is getting better. </p>
    </div>
  );
}
export default App;
