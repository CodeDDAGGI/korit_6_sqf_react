/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";



function RouteStudySubPage() {
    const navigate = useNavigate();
    const location = useLocation()

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/")
    console.log(location.pathname.substring(index));
    // pathname 전체 주소의 값

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace:true}); 
        // window.location.href = "https://naver.com" => replacs : false 
        // window.location.replace("https://naver.com") => replacs : true  => history 안남김 - replace를 걸어둔 초기시점으로 돌아감
        //  a -> b -> c c에서 뒤로가기 c -> a
    }
    
    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>
            <button onClick={handleAgeClick}>나이</button>
            <Routes>
                <Route path="/name" element={<h1>김병규</h1>}/>
                <Route path="/age" element={<h1>28</h1>}/>
                <Route path="/address" element={<h1>해운대</h1>}/>
            </Routes>
        </div>
    );
}

export default RouteStudySubPage;