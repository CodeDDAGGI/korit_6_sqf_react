/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";



function RouteStudySubPage({}) {
    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>

            <Routes>
                <Route path="/name" element={<h1>김병규</h1>}/>
                <Route path="/age" element={<h1>28</h1>}/>
                <Route path="/address" element={<h1>해운대</h1>}/>
            </Routes>
        </div>
    );
}

export default RouteStudySubPage;