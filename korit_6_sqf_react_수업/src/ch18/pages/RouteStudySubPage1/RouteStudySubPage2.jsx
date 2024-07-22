/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import RouteStudySubPage3 from "./RouteStudySubPage3";




function RouteStudySubPage2({}) {
    return (
        <div>
            <ul>
                {/* 링크 주소로 가겠다 */}
                <Link to={"/routestudy/page2/name"}><li>이름2</li></Link> 
                <Link to={"/routestudy/page2/age"}><li>나이2</li></Link>
                <Link to={"/routestudy/page2/address"}><li>주소2</li></Link>

            </ul>
            {/* 보여지는 화면 */}
            <Routes>
                <Route path="/name/*" element={<RouteStudySubPage3/>}/>
                <Route path="/age" element={<h1>281</h1>}/>
                <Route path="/address" element={<h1>해운대1</h1>}/>
            </Routes>
        </div>
    );
}

export default RouteStudySubPage2;