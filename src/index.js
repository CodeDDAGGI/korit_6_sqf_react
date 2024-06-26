import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './ch10/App'; // 기본틀 (다른 컴포넌트사용가능)
import App from './ch16_2/App';
// import { BrowserRouter } from 'react-router-dom';

//? public > index.html > div id= root (최상위)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
        <App />
    // </BrowserRouter>
);

