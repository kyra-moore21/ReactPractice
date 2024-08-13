import React from 'react';
import ReactDOM from 'react-dom/client';
import TheHeader from "./Layout/TheHeader";
import Counter from './Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ backgroundColor: "black", color: "white" }}>
<TheHeader />
<Counter></Counter>
  </div>
);

