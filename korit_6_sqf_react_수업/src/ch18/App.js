import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainSidebar from './components/MainSidbar/MainSidebar';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react'; // emotion 컴포넌트
import { reset } from './style/global'; // 전역 선언
import MainBody from './components/MainBody/MainBody';

function App() {

    
    return (
        <>
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader  />
                <MainBody/>
                <MainSidebar />
            </MainLayout>
        </>
    );
}

export default App;
