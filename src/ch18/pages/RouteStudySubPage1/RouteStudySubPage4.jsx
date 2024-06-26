/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";

function RouteStudySubPage4({}) {
    return (
        <div>
            <ul>
                {/* 링크 주소로 가겠다 */}
                <Link to={"/routestudy/page2/name/name/name"}><li>이름4</li></Link>
                <Link to={"/routestudy/page2/name/name/age"}><li>나이4</li></Link>
                <Link to={"/routestudy/page2/name/name/address"}><li>주소4</li></Link> 

            </ul>
            {/* 보여지는 화면 */}
            <Routes>
                <Route path="/name" element={<h1>2423112</h1>}/>
                <Route path="/age" element={<h1>28151252</h1>}/>
                <Route path="/address" element={<h1>251115213</h1>}/>
            </Routes>
        </div>
    );
}

export default RouteStudySubPage4;