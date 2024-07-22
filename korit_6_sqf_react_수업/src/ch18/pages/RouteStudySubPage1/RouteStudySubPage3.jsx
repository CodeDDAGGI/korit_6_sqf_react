/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import RouteStudySubPage4 from "./RouteStudySubPage4";

function RouteStudySubPage3({}) {
    return (
        <div>
            <ul>
                {/* 링크 주소로 가겠다 */}
                <Link to={"/routestudy/page2/name/name"}><li>이름3</li></Link> 
                <Link to={"/routestudy/page2/name/age"}><li>나이3</li></Link>
                <Link to={"/routestudy/page2/name/address"}><li>주소3</li></Link>

            </ul>
            {/* 보여지는 화면 */}
            <Routes>
                <Route path="/name/*" element={<RouteStudySubPage4/>}/>
                <Route path="/age" element={<h1>28151251</h1>}/>
                <Route path="/address" element={<h1>2511</h1>}/>
            </Routes>
        </div>
    );
}

export default RouteStudySubPage3;