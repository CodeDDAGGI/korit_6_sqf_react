import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './ch10/App'; // 기본틀 (다른 컴포넌트사용가능)
import App from './ch18/App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

//? public > index.html > div id= root (최상위)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecoilRoot>
);

