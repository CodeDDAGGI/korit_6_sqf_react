/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPager/RouteStudyPage";

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route  path="/routestudy/*" element={<RouteStudyPage />} />
                {/* 라우터 안에 라우터 "*"" */}
            </Routes>
        </div>
    );
}

export default MainBody;