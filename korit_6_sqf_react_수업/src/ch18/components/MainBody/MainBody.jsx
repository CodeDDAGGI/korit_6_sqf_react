/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPager/RouteStudyPage";
import HomePage from "../../pages/HomePage/HomePage";
import ParamsStudyPage from "../../pages/ParamsStudyPage/ParamsStudyPage";
import SearchParamsStudy from "../../pages/SearchParamsStudyPage/SearchParamsStudy";
import CustomHookPage from "../../pages/CustomHookPage/CustomHookPage";
import MemoizationPage from "../../pages/MemoizationPage/MemoizationPage";

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/routestudy/*" element={<RouteStudyPage />} />
                {/* 라우터 안에 라우터 "*" 서브라우트  */}
                <Route path="/params/:name/*" element={<ParamsStudyPage/>}/>
                <Route path="/searchparams" element={<SearchParamsStudy/>}/>
                <Route path="/customhook/:id" element={<CustomHookPage/>}/>
                <Route path="/memoization" element={<MemoizationPage/>}/>
            </Routes>
        </div>
    );
}

export default MainBody;