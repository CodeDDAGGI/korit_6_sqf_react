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
import PostPage2 from "./pages/basic/PostPage2";
import PromisePage from "./pages/basic/PromisePage";
import Test from "./pages/basic/Test";
import RegisterSizePage from "./pages/basic/RegisterSizePage";
import RegisterColorPage from "./pages/basic/RegisterColorPage";
import ComputerPage from "./pages/basic/ComputerPage";




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
              <Route path="/async/basic/post2" element={<PostPage2 />} />
              <Route path="/async/basic/promise" element={<PromisePage />} />
              <Route path="/async/basic/test" element={<Test />} />
              <Route path="/async/basic/size/register" element={<RegisterSizePage />} />
              <Route path="/async/basic/color/register" element={<RegisterColorPage />} />
              <Route path="/computer" element={<ComputerPage />} />
              <Route path="/Component" element={<Component />} />
            </Routes>
          </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
