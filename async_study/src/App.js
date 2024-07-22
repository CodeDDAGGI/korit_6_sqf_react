import { Global } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { reset } from "./style/global";
import GetPage from "./pages/basic/GetPage";
import DeletePage from "./pages/basic/DeletePage";
import PutPage from "./pages/basic/PutPage";
import PostPage from "./pages/basic/PostPage";
import Sidebar from "./component/Sidebar/Sidebar";
import MainContainer from "./component/MainContainer/MainContainer";
import MainLayout from "./component/MainLayout/MainLayout";




function App() {
  return (
    <>
    {/* 전역 컴포넌트 */}
      <Global styles={reset}/>
      <MainLayout>
        <Sidebar />
          <MainContainer>
            <Routes> 
              <Route path="/async/basic/post" element={<PostPage/>} />
              <Route path="/async/basic/get" element={<GetPage/>} />
              <Route path="/async/basic/put" element={<PutPage/>} />
              <Route path="/async/basic/delete" element={<DeletePage />} />
            </Routes>
          </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
