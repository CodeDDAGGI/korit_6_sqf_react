/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import MainContainer from "../../components/MainContainer/MainContainer";
import RouteStudySubPage from "../RouteStudySubPage1/RouteStudySubPage";
import RouteStudySubPage2 from "../RouteStudySubPage1/RouteStudySubPage2";
// import * as s from "./style";
// import RouteStudySubPage from "../RouteStudySubPage1/RouteStudySubPage";

function RouteStudyPage(props) {
    return (
        <MainContainer>
            <div>
                <h1>라우트 수업</h1>
            <ul>
                <Link to={"/routestudy/page1"}><li>1번 페이지</li></Link>{/* link = a태그 */}
                <Link to={"/routestudy/page2"}><li>2번 페이지</li></Link>
                <Link to={"/routestudy/page3"}><li>3번 페이지</li></Link>
            </ul>
                <Routes>
                    <Route path="/page1/*" element={<RouteStudySubPage/>}/>
                    <Route path="/page2/*" element={<RouteStudySubPage2/>}/>
                    <Route path="/page3/" element={<div>페이지3</div>}/>
                </Routes>
            </div>
            
        </MainContainer>
    );
}

export default RouteStudyPage;